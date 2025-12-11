// UI Binding and Event Handling for Neewer DL400 Studio

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const connectBtn = document.getElementById('connectBtn');
    const disconnectBtn = document.getElementById('disconnectBtn');
    const emergencyStopBtn = document.getElementById('emergencyStop');
    const playBtn = document.getElementById('playSequence');
    const pauseBtn = document.getElementById('pauseSequence');
    const stopBtn = document.getElementById('stopSequence');
    const moveLeftBtn = document.getElementById('moveLeftBtn');
    const moveRightBtn = document.getElementById('moveRightBtn');
    const stopManualBtn = document.getElementById('stopBtn');
    const speedButtons = Array.from(document.querySelectorAll('.speed-btn'));
    const addMoveLeftBtn = document.getElementById('addMoveLeft');
    const addMoveRightBtn = document.getElementById('addMoveRight');
    const addWaitBtn = document.getElementById('addWait');
    const addSpeedBtn = document.getElementById('addSpeed');
    const addSlowAccelBtn = document.getElementById('addSlowAccel');
    const addConstantAccelBtn = document.getElementById('addConstantAccel');
    const addLoopBtn = document.getElementById('addLoop');
    const clearAllBtn = document.getElementById('clearAll');
    const presetCards = document.querySelectorAll('.preset-card');
    
    // Acceleration controls
    const setConstantAccelBtn = document.getElementById('setConstantAccel');
    const setSlowAccelBtn = document.getElementById('setSlowAccel');

    // Connection
    connectBtn.addEventListener('click', () => BLEDriver.connect());
    disconnectBtn.addEventListener('click', () => BLEDriver.disconnect());
    emergencyStopBtn.addEventListener('click', () => BLEDriver.emergencyStop());

    // Manual controls
    moveLeftBtn.addEventListener('mousedown', () => BLEDriver.moveLeft());
    moveLeftBtn.addEventListener('mouseup', () => BLEDriver.stopMotion());
    moveLeftBtn.addEventListener('mouseleave', () => BLEDriver.stopMotion());
    moveRightBtn.addEventListener('mousedown', () => BLEDriver.moveRight());
    moveRightBtn.addEventListener('mouseup', () => BLEDriver.stopMotion());
    moveRightBtn.addEventListener('mouseleave', () => BLEDriver.stopMotion());
    stopManualBtn.addEventListener('click', () => BLEDriver.stopMotion());

    // Speed buttons
    speedButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const speed = parseInt(btn.dataset.speed);
            BLEDriver.setSpeed(speed);
        });
    });

    // Acceleration buttons
    setConstantAccelBtn.addEventListener('click', () => BLEDriver.setConstantAccel());
    setSlowAccelBtn.addEventListener('click', () => BLEDriver.setSlowAccel());

    // Sequencer controls
    playBtn.addEventListener('click', () => Sequencer.playSequencer());
    pauseBtn.addEventListener('click', () => Sequencer.pauseSequencer());
    stopBtn.addEventListener('click', () => Sequencer.stopSequencer());

    // Step addition
    addMoveLeftBtn.addEventListener('click', () => {
        const duration = prompt('Duration in milliseconds?', '2000');
        if (duration && !isNaN(duration)) {
            Sequencer.addStep(new Sequencer.Step('moveLeft', {duration: parseInt(duration)}));
        }
    });
    addMoveRightBtn.addEventListener('click', () => {
        const duration = prompt('Duration in milliseconds?', '2000');
        if (duration && !isNaN(duration)) {
            Sequencer.addStep(new Sequencer.Step('moveRight', {duration: parseInt(duration)}));
        }
    });
    addWaitBtn.addEventListener('click', () => {
        const duration = prompt('Wait duration in milliseconds?', '1000');
        if (duration && !isNaN(duration)) {
            Sequencer.addStep(new Sequencer.Step('wait', {duration: parseInt(duration)}));
        }
    });
    addSpeedBtn.addEventListener('click', () => {
        const speed = prompt('Speed (1-5)?', '3');
        if (speed && speed >= 1 && speed <= 5) {
            Sequencer.addStep(new Sequencer.Step('speed', {speed: parseInt(speed)}));
        }
    });
    addSlowAccelBtn.addEventListener('click', () => {
        Sequencer.addStep(new Sequencer.Step('accel', {accel: 'slow'}));
    });
    addConstantAccelBtn.addEventListener('click', () => {
        Sequencer.addStep(new Sequencer.Step('accel', {accel: 'constant'}));
    });
    addLoopBtn.addEventListener('click', () => {
        const count = prompt('Loop count?', '2');
        if (count && !isNaN(count)) {
            Sequencer.addStep(new Sequencer.Step('loop', {count: parseInt(count)}));
        }
    });
    clearAllBtn.addEventListener('click', () => {
        if (confirm('Clear all steps?')) {
            Sequencer.clearAllSteps();
        }
    });

    // Presets
    presetCards.forEach(card => {
        card.addEventListener('click', () => {
            const preset = card.dataset.preset;
            Sequencer.loadPreset(preset);
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT') return;
        switch(e.code) {
            case 'ArrowLeft':
                BLEDriver.moveLeft();
                break;
            case 'ArrowRight':
                BLEDriver.moveRight();
                break;
            case 'Space':
                e.preventDefault();
                BLEDriver.stopMotion();
                break;
            case 'Digit1':
            case 'Digit2':
            case 'Digit3':
            case 'Digit4':
            case 'Digit5':
                BLEDriver.setSpeed(parseInt(e.key));
                break;
            case 'KeyP':
                if (Sequencer.isPlaying()) Sequencer.pauseSequencer();
                else Sequencer.playSequencer();
                break;
            case 'KeyS':
                Sequencer.stopSequencer();
                break;
            case 'KeyE':
                BLEDriver.emergencyStop();
                break;
            case 'KeyC':
                // C for Constant acceleration
                BLEDriver.setConstantAccel();
                break;
            case 'KeyF':
                // F for smooth/slow (Feather) acceleration
                BLEDriver.setSlowAccel();
                break;
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.target.tagName === 'INPUT') return;
        switch(e.code) {
            case 'ArrowLeft':
            case 'ArrowRight':
                BLEDriver.stopMotion();
                break;
        }
    });

    // Initial UI state
    disconnectBtn.disabled = true;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;

    console.log('Studio UI initialized.');
    console.log('Keyboard shortcuts:');
    console.log('  Arrow keys: Move left/right');
    console.log('  Space: Stop');
    console.log('  1-5: Set speed');
    console.log('  C: Constant acceleration');
    console.log('  F: Slow (Feather/smooth) acceleration');
    console.log('  P: Play/Pause sequence');
    console.log('  S: Stop sequence');
    console.log('  E: Emergency stop');
});