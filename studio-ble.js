// BLE Driver for Neewer DL400
const log = console.log;

// BLE constants from ble-dl400.js
const serviceUuid = 0xffe0;
const generalCharacteristic = "69400001-b5a3-f393-e0a9-e50e24dcca99";
const writingCharacteristic = "69400002-b5a3-f393-e0a9-e50e24dcca99";
const readingCharacteristic = "69400003-b5a3-f393-e0a9-e50e24dcca99";

const SPEED1 = new Uint8Array([0x90,0x01,0x05,0x01,0x00,0x01,0x00,0x00,0x9a]);
const SPEED2 = new Uint8Array([0x90,0x01,0x05,0x01,0x00,0x02,0x00,0x00,0x9a]);
const SPEED3 = new Uint8Array([0x90,0x01,0x05,0x01,0x00,0x03,0x00,0x00,0x9a]);
const SPEED4 = new Uint8Array([0x90,0x01,0x05,0x01,0x00,0x04,0x00,0x00,0x9a]);
const SPEED5 = new Uint8Array([0x90,0x01,0x05,0x01,0x00,0x05,0x00,0x00,0x9a]);

const ENABLEMOTIONTORIGHT = new Uint8Array([0x90,0x01,0x05,0x01,0x01,0xff,0xff,0x00,0x96]);
const ENABLEMOTIONTOLEFT = new Uint8Array([0x90,0x01,0x05,0x01,0x01,0x00,0xff,0x00,0x96]);
const STOPCOMMAND = new Uint8Array([0x90,0x01,0x05,0x01,0x01,0xff,0x00,0x00,0x97]);
const MANUALMODE = new Uint8Array([0x90,0x06,0x05,0x01,0x00,0x00,0x00,0x00,0x9c]);
const LIVEVIDEOMODE = new Uint8Array([0x90,0x06,0x05,0x02,0x00,0x00,0x00,0x00,0x9d]);

const CONSTANTACCEL = new Uint8Array([0x90,0x01,0x05,0x01,0x02,0x00,0x00,0x00,0x99]);
const SLOWACCEL = new Uint8Array([0x90,0x01,0x05,0x01,0x02,0xff,0x00,0x00,0x98]);

// Global state
let bleDevice = null;
let bleServer = null;
let writeCharacteristic = null;
let isConnected = false;
let currentSpeed = 5;
let currentAccel = 'constant'; // 'constant' or 'slow'
let batteryLevel = null;
let heartbeatInterval = null;

// Deceleration delay - when in slow mode, the slider doesn't stop immediately
// This is the estimated time for the slider to come to a complete stop
const DECELERATION_DELAY_MS = 800;

// Utility
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateStatus(connected) {
    isConnected = connected;
    const statusItem = document.querySelector('.status-item');
    if (connected) {
        statusItem.classList.remove('disconnected');
        statusItem.classList.add('connected');
        statusItem.querySelector('span').textContent = 'Connected';
    } else {
        statusItem.classList.remove('connected');
        statusItem.classList.add('disconnected');
        statusItem.querySelector('span').textContent = 'Disconnected';
        if (heartbeatInterval) {
            clearInterval(heartbeatInterval);
            heartbeatInterval = null;
        }
    }
}

function updateBattery(level) {
    batteryLevel = level;
    const batteryText = document.querySelector('.battery span');
    if (batteryText) {
        batteryText.textContent = `Battery: ${level}%`;
    }
}

function updateAccelUI(accel) {
    document.querySelectorAll('.accel-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.accel === accel);
    });
}

// BLE Communication
async function connect() {
    try {
        log('Requesting Bluetooth Device...');
        if (!await navigator.bluetooth.getAvailability()) {
            alert('Bluetooth not available');
            return;
        }

        bleDevice = await navigator.bluetooth.requestDevice({
            filters: [{ name: `NEEWER-DL400` }],
            optionalServices: [serviceUuid, generalCharacteristic, writingCharacteristic, readingCharacteristic]
        });

        log('Connecting to GATT Server...');
        bleServer = await bleDevice.gatt.connect();
        const service = await bleServer.getPrimaryService(generalCharacteristic);
        writeCharacteristic = await service.getCharacteristic(writingCharacteristic);

        // Test connection by cycling speeds
        await writeCharacteristic.writeValueWithoutResponse(SPEED5);
        await sleep(100);
        await writeCharacteristic.writeValueWithoutResponse(SPEED4);
        await sleep(100);
        await writeCharacteristic.writeValueWithoutResponse(SPEED3);
        await sleep(100);
        await writeCharacteristic.writeValueWithoutResponse(SPEED2);
        await sleep(100);
        await writeCharacteristic.writeValueWithoutResponse(SPEED1);
        await sleep(100);
        await writeCharacteristic.writeValueWithoutResponse(SPEED5);

        updateStatus(true);
        log('Connection successful.');

        // Start heartbeat monitoring (simulated for now)
        heartbeatInterval = setInterval(() => {
            // In a real implementation, we'd read from readingCharacteristic
            // For now, simulate battery drop
            if (batteryLevel === null) batteryLevel = 85;
            else if (batteryLevel > 10) batteryLevel -= 0.1;
            updateBattery(Math.round(batteryLevel));
        }, 5000);

    } catch(error) {
        log('Connection error: ' + error);
        alert('Failed to connect: ' + error);
        bleDevice = null;
        updateStatus(false);
    }
}

function disconnect() {
    if (bleDevice && bleDevice.gatt.connected) {
        bleDevice.gatt.disconnect();
    }
    bleDevice = null;
    writeCharacteristic = null;
    updateStatus(false);
    log('Disconnected.');
}

async function writeCommand(cmd) {
    if (!writeCharacteristic || !isConnected) {
        log('Not connected, cannot send command');
        return;
    }
    try {
        await writeCharacteristic.writeValueWithoutResponse(cmd);
    } catch(e) {
        log(`Command failed: ${e}`);
        disconnect();
    }
}

// High-level commands
async function moveLeft() {
    await writeCommand(ENABLEMOTIONTOLEFT);
}

async function moveRight() {
    await writeCommand(ENABLEMOTIONTORIGHT);
}

async function stopMotion() {
    await writeCommand(STOPCOMMAND);
}

// Stop motion and wait for deceleration if in slow mode
async function stopMotionWithDecel() {
    await writeCommand(STOPCOMMAND);
    if (currentAccel === 'slow') {
        // Wait for deceleration to complete
        await sleep(DECELERATION_DELAY_MS);
    }
}

async function setSpeed(speed) {
    currentSpeed = speed;
    const speedMap = {1: SPEED1, 2: SPEED2, 3: SPEED3, 4: SPEED4, 5: SPEED5};
    await writeCommand(speedMap[speed]);
    // Update UI
    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.speed) === speed);
    });
}

async function setConstantAccel() {
    currentAccel = 'constant';
    await writeCommand(CONSTANTACCEL);
    updateAccelUI('constant');
    log('Acceleration set to: Constant');
}

async function setSlowAccel() {
    currentAccel = 'slow';
    await writeCommand(SLOWACCEL);
    updateAccelUI('slow');
    log('Acceleration set to: Slow (smooth acceleration/deceleration)');
}

async function setAccel(accelType) {
    if (accelType === 'constant') {
        await setConstantAccel();
    } else if (accelType === 'slow') {
        await setSlowAccel();
    }
}

async function emergencyStop() {
    log('Emergency stop');
    for (let i = 0; i < 3; i++) {
        await writeCommand(LIVEVIDEOMODE);
        await sleep(50);
        await writeCommand(CONSTANTACCEL);
        await sleep(50);
        await writeCommand(STOPCOMMAND);
        await sleep(50);
        await writeCommand(MANUALMODE);
        await sleep(50);
    }
    await writeCommand(SLOWACCEL);
    currentAccel = 'slow';
    updateAccelUI('slow');
    log('Emergency stop complete');
}

// Export
window.BLEDriver = {
    connect,
    disconnect,
    moveLeft,
    moveRight,
    stopMotion,
    stopMotionWithDecel,
    setSpeed,
    setConstantAccel,
    setSlowAccel,
    setAccel,
    emergencyStop,
    isConnected: () => isConnected,
    currentSpeed: () => currentSpeed,
    currentAccel: () => currentAccel,
    batteryLevel: () => batteryLevel,
    DECELERATION_DELAY_MS
};