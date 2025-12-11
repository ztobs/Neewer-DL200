// Sequencer Engine for Neewer DL400 Studio

class Step {
    constructor(type, params) {
        this.id = Date.now() + Math.random();
        this.type = type; // 'moveLeft', 'moveRight', 'wait', 'speed', 'accel', 'loop'
        this.params = params || {};
        this.duration = params.duration || 1000;
        this.speed = params.speed;
        this.accel = params.accel; // 'constant' or 'slow'
        this.direction = params.direction;
    }

    getDescription() {
        switch(this.type) {
            case 'moveLeft': return `Move Left for ${this.duration}ms`;
            case 'moveRight': return `Move Right for ${this.duration}ms`;
            case 'wait': return `Wait for ${this.duration}ms`;
            case 'speed': return `Set speed to ${this.speed}`;
            case 'accel': return `Set accel to ${this.accel === 'slow' ? 'Slow (Smooth)' : 'Constant'}`;
            case 'loop': return `Loop ${this.params.count} times`;
            default: return this.type;
        }
    }

    getIconClass() {
        switch(this.type) {
            case 'moveLeft': return 'fas fa-arrow-left';
            case 'moveRight': return 'fas fa-arrow-right';
            case 'wait': return 'fas fa-clock';
            case 'speed': return 'fas fa-tachometer-alt';
            case 'accel': return 'fas fa-rocket';
            case 'loop': return 'fas fa-redo';
            default: return 'fas fa-question';
        }
    }

    getStepColor() {
        switch(this.type) {
            case 'moveLeft': return 'move-left';
            case 'moveRight': return 'move-right';
            case 'wait': return 'wait';
            case 'speed': return 'speed';
            case 'accel': return 'accel';
            case 'loop': return 'loop';
            default: return '';
        }
    }

    async execute() {
        console.log(`Executing step: ${this.getDescription()}`);
        switch(this.type) {
            case 'moveLeft':
                await BLEDriver.moveLeft();
                await sleep(this.duration);
                // Use stopMotionWithDecel to account for slow mode deceleration
                await BLEDriver.stopMotionWithDecel();
                break;
            case 'moveRight':
                await BLEDriver.moveRight();
                await sleep(this.duration);
                // Use stopMotionWithDecel to account for slow mode deceleration
                await BLEDriver.stopMotionWithDecel();
                break;
            case 'wait':
                await sleep(this.duration);
                break;
            case 'speed':
                await BLEDriver.setSpeed(this.speed);
                break;
            case 'accel':
                await BLEDriver.setAccel(this.accel);
                break;
            case 'loop':
                // Loop handling is done at sequencer level
                break;
        }
    }
}

// Sequencer state
let sequencerSteps = [];
let isPlaying = false;
let isPaused = false;
let currentStepIndex = 0;
let sequencerTimeout = null;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function addStep(step) {
    sequencerSteps.push(step);
    renderSteps();
}

function removeStep(id) {
    sequencerSteps = sequencerSteps.filter(s => s.id !== id);
    renderSteps();
}

function clearAllSteps() {
    sequencerSteps = [];
    renderSteps();
}

function renderSteps() {
    const stepsList = document.getElementById('stepsList');
    if (!stepsList) return;
    stepsList.innerHTML = '';
    if (sequencerSteps.length === 0) {
        stepsList.innerHTML = `
            <li class="empty-state">
                <i class="fas fa-plus-circle"></i>
                <h3>No steps yet</h3>
                <p>Add steps to build your camera movement sequence.</p>
            </li>
        `;
        return;
    }
    sequencerSteps.forEach((step, idx) => {
        const li = document.createElement('li');
        li.className = 'step-item';
        li.dataset.id = step.id;
        li.innerHTML = `
            <div class="step-handle">
                <i class="fas fa-grip-vertical"></i>
            </div>
            <div class="step-content">
                <div class="step-icon ${step.getStepColor()}">
                    <i class="${step.getIconClass()}"></i>
                </div>
                <div class="step-details">
                    <div class="step-title">${step.getDescription()}</div>
                    <div class="step-desc">Step ${idx + 1}</div>
                </div>
                <div class="step-actions">
                    <button class="step-up" title="Move up"><i class="fas fa-arrow-up"></i></button>
                    <button class="step-down" title="Move down"><i class="fas fa-arrow-down"></i></button>
                    <button class="step-remove" title="Remove"><i class="fas fa-times"></i></button>
                </div>
            </div>
        `;
        stepsList.appendChild(li);
    });
    attachStepEvents();
}

function attachStepEvents() {
    document.querySelectorAll('.step-up').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.closest('.step-item').dataset.id;
            const index = sequencerSteps.findIndex(s => s.id == id);
            if (index > 0) {
                [sequencerSteps[index], sequencerSteps[index-1]] = [sequencerSteps[index-1], sequencerSteps[index]];
                renderSteps();
            }
        });
    });
    document.querySelectorAll('.step-down').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.closest('.step-item').dataset.id;
            const index = sequencerSteps.findIndex(s => s.id == id);
            if (index < sequencerSteps.length - 1) {
                [sequencerSteps[index], sequencerSteps[index+1]] = [sequencerSteps[index+1], sequencerSteps[index]];
                renderSteps();
            }
        });
    });
    document.querySelectorAll('.step-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.closest('.step-item').dataset.id;
            removeStep(id);
        });
    });
}

async function playSequencer() {
    if (!BLEDriver.isConnected()) {
        alert('Please connect to the device first.');
        return;
    }
    if (sequencerSteps.length === 0) {
        alert('No steps to play.');
        return;
    }
    if (isPlaying) return;
    isPlaying = true;
    isPaused = false;
    document.getElementById('playSequence').disabled = true;
    document.getElementById('pauseSequence').disabled = false;
    document.getElementById('stopSequence').disabled = false;
    currentStepIndex = 0;

    while (currentStepIndex < sequencerSteps.length && isPlaying && !isPaused) {
        const step = sequencerSteps[currentStepIndex];
        await step.execute();
        currentStepIndex++;
    }

    if (currentStepIndex >= sequencerSteps.length) {
        stopSequencer();
        console.log('Sequence completed.');
    }
}

function pauseSequencer() {
    isPaused = true;
    document.getElementById('pauseSequence').disabled = true;
    document.getElementById('playSequence').disabled = false;
}

function resumeSequencer() {
    if (isPlaying && isPaused) {
        isPaused = false;
        document.getElementById('pauseSequence').disabled = false;
        document.getElementById('playSequence').disabled = true;
        playSequencer(); // continue from currentStepIndex
    }
}

function stopSequencer() {
    isPlaying = false;
    isPaused = false;
    document.getElementById('playSequence').disabled = false;
    document.getElementById('pauseSequence').disabled = true;
    document.getElementById('stopSequence').disabled = true;
    BLEDriver.stopMotion();
    if (sequencerTimeout) clearTimeout(sequencerTimeout);
}

// Presets - now with acceleration settings for professional use
function loadPreset(presetName) {
    clearAllSteps();
    switch(presetName) {
        case 'interview':
            // Interview mode: smooth, slow acceleration for cinematic back-and-forth
            addStep(new Step('accel', {accel: 'slow'}));
            addStep(new Step('speed', {speed: 2}));
            addStep(new Step('moveLeft', {duration: 5000}));
            addStep(new Step('wait', {duration: 2000}));
            addStep(new Step('moveRight', {duration: 5000}));
            addStep(new Step('wait', {duration: 2000}));
            break;
        case 'showcase':
            // Product showcase: constant speed for consistent motion
            addStep(new Step('accel', {accel: 'constant'}));
            addStep(new Step('speed', {speed: 3}));
            addStep(new Step('moveRight', {duration: 8000}));
            break;
        case 'dramatic':
            // Dramatic reveal: smooth acceleration for cinematic effect
            addStep(new Step('accel', {accel: 'slow'}));
            addStep(new Step('speed', {speed: 1}));
            addStep(new Step('moveLeft', {duration: 2000}));
            addStep(new Step('speed', {speed: 3}));
            addStep(new Step('moveLeft', {duration: 3000}));
            addStep(new Step('speed', {speed: 1}));
            addStep(new Step('moveLeft', {duration: 2000}));
            break;
        case 'timelapse':
            // Timelapse: constant acceleration at slowest speed
            addStep(new Step('accel', {accel: 'constant'}));
            addStep(new Step('speed', {speed: 1}));
            addStep(new Step('moveRight', {duration: 60000}));
            break;
    }
    console.log(`Loaded preset: ${presetName}`);
}

// Export
window.Sequencer = {
    Step,
    addStep,
    removeStep,
    clearAllSteps,
    playSequencer,
    pauseSequencer,
    resumeSequencer,
    stopSequencer,
    loadPreset,
    isPlaying: () => isPlaying,
    isPaused: () => isPaused,
    getSteps: () => sequencerSteps
};