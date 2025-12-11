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

    // Preset Management
    initPresetUI();

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

// Preset UI Management
let currentCategory = 'documentary';
let currentSearchQuery = '';

function initPresetUI() {
    // Initialize presets from loaded modules
    PresetManager.initializePresets();
    
    renderCategoryTabs();
    renderPresets(currentCategory);
    bindPresetEvents();
    addSavePresetModal();
}

function renderCategoryTabs() {
    const container = document.getElementById('presetCategories');
    if (!container) return;
    
    const categories = PresetManager.getCategories();
    const allPresets = PresetManager.getAllPresets();
    
    container.innerHTML = '';
    
    for (const catId in categories) {
        const cat = categories[catId];
        const presets = allPresets[catId] || [];
        const count = presets.length;
        
        if (count === 0 && catId !== 'custom') continue;
        
        const tab = document.createElement('button');
        tab.className = `category-tab ${catId === currentCategory ? 'active' : ''}`;
        tab.dataset.category = catId;
        tab.innerHTML = `
            <i class="${cat.icon}"></i>
            ${cat.name}
            <span class="count">${count}</span>
        `;
        tab.style.setProperty('--cat-color', cat.color);
        container.appendChild(tab);
    }
}

function renderPresets(category, searchQuery = '') {
    const grid = document.getElementById('presetsGrid');
    if (!grid) return;
    
    let presets;
    if (searchQuery) {
        presets = PresetManager.searchPresets(searchQuery);
    } else {
        presets = PresetManager.getPresetsByCategory(category);
    }
    
    grid.innerHTML = '';
    
    if (presets.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-folder-open"></i>
                <h3>${searchQuery ? 'No matching presets' : category === 'custom' ? 'No custom presets yet' : 'No presets in this category'}</h3>
                <p>${category === 'custom' ? 'Save your current sequence as a preset to get started.' : 'Try another category or create a custom preset.'}</p>
            </div>
        `;
        return;
    }
    
    presets.forEach(preset => {
        const catInfo = PresetManager.getCategoryInfo(preset.category);
        const duration = PresetManager.getPresetDuration(preset);
        const stepCount = preset.steps.length;
        const isCustom = preset.category === 'custom';
        
        const card = document.createElement('div');
        card.className = `preset-card ${isCustom ? 'custom' : ''}`;
        card.dataset.presetId = preset.id;
        
        card.innerHTML = `
            <div class="preset-icon" style="background-color: ${catInfo.color}20; color: ${catInfo.color}">
                <i class="${catInfo.icon}"></i>
            </div>
            <div class="preset-info">
                <div class="preset-title">${preset.name}</div>
                <div class="preset-desc">${preset.description || ''}</div>
                <div class="preset-meta">
                    <span><i class="fas fa-clock"></i> ${PresetManager.formatDuration(duration)}</span>
                    <span><i class="fas fa-list"></i> ${stepCount} steps</span>
                    ${preset.tags && preset.tags.length > 0 ? `<span><i class="fas fa-tag"></i> ${preset.tags[0]}</span>` : ''}
                </div>
            </div>
            <div class="preset-actions">
                <button class="preset-action-btn load-preset" title="Load preset"><i class="fas fa-play"></i></button>
                <button class="preset-action-btn export-preset" title="Export to file"><i class="fas fa-download"></i></button>
                ${isCustom ? `<button class="preset-action-btn delete delete-preset" title="Delete preset"><i class="fas fa-trash"></i></button>` : ''}
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    // Bind preset card events
    bindPresetCardEvents();
}

function bindPresetCardEvents() {
    // Load preset on card click
    document.querySelectorAll('.preset-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.preset-actions')) return;
            const presetId = card.dataset.presetId;
            const preset = PresetManager.getPresetById(presetId);
            if (preset) {
                PresetManager.loadPreset(preset);
                showToast(`Loaded: ${preset.name}`);
            }
        });
    });
    
    // Load button
    document.querySelectorAll('.load-preset').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = e.target.closest('.preset-card');
            const presetId = card.dataset.presetId;
            const preset = PresetManager.getPresetById(presetId);
            if (preset) {
                PresetManager.loadPreset(preset);
                showToast(`Loaded: ${preset.name}`);
            }
        });
    });
    
    // Export button
    document.querySelectorAll('.export-preset').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = e.target.closest('.preset-card');
            const presetId = card.dataset.presetId;
            const preset = PresetManager.getPresetById(presetId);
            if (preset) {
                PresetManager.exportPresetToFile(preset);
                showToast(`Exported: ${preset.name}`);
            }
        });
    });
    
    // Delete button
    document.querySelectorAll('.delete-preset').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = e.target.closest('.preset-card');
            const presetId = card.dataset.presetId;
            if (confirm('Delete this preset?')) {
                PresetManager.deleteCustomPreset(presetId);
                renderCategoryTabs();
                renderPresets(currentCategory, currentSearchQuery);
                showToast('Preset deleted');
            }
        });
    });
}

function bindPresetEvents() {
    // Category tab clicks
    document.getElementById('presetCategories')?.addEventListener('click', (e) => {
        const tab = e.target.closest('.category-tab');
        if (tab) {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            currentSearchQuery = '';
            document.getElementById('presetSearch').value = '';
            renderPresets(currentCategory);
        }
    });
    
    // Search input
    const searchInput = document.getElementById('presetSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value.trim();
            if (currentSearchQuery) {
                document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
                renderPresets(null, currentSearchQuery);
            } else {
                const activeTab = document.querySelector(`.category-tab[data-category="${currentCategory}"]`);
                if (activeTab) activeTab.classList.add('active');
                renderPresets(currentCategory);
            }
        });
    }
    
    // Save preset button
    document.getElementById('savePresetBtn')?.addEventListener('click', () => {
        const steps = Sequencer.getSteps();
        if (steps.length === 0) {
            showToast('Add some steps first');
            return;
        }
        showSaveModal();
    });
    
    // Import preset button
    document.getElementById('importPresetBtn')?.addEventListener('click', () => {
        document.getElementById('presetFileInput')?.click();
    });
    
    // File input change
    document.getElementById('presetFileInput')?.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const imported = await PresetManager.importPresetFromFile(file);
                renderCategoryTabs();
                currentCategory = 'custom';
                document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
                document.querySelector('.category-tab[data-category="custom"]')?.classList.add('active');
                renderPresets('custom');
                showToast(`Imported ${imported.length} preset(s)`);
            } catch (err) {
                showToast('Import failed: ' + err.message, 'error');
            }
            e.target.value = '';
        }
    });
    
    // Export current sequence button
    document.getElementById('exportSequenceBtn')?.addEventListener('click', () => {
        const steps = Sequencer.getSteps();
        if (steps.length === 0) {
            showToast('Add some steps first');
            return;
        }
        const name = prompt('Sequence name?', 'My Sequence');
        if (name) {
            PresetManager.exportCurrentSequence(name);
            showToast('Sequence exported');
        }
    });
}

function addSavePresetModal() {
    // Create modal if not exists
    if (document.getElementById('savePresetModal')) return;
    
    const modal = document.createElement('div');
    modal.id = 'savePresetModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal">
            <h3><i class="fas fa-save"></i> Save as Preset</h3>
            <div class="modal-body">
                <div class="form-group">
                    <label for="presetName">Preset Name *</label>
                    <input type="text" id="presetName" placeholder="e.g., My Interview Style">
                </div>
                <div class="form-group">
                    <label for="presetDesc">Description</label>
                    <textarea id="presetDesc" placeholder="Describe what this preset does..."></textarea>
                </div>
                <div class="form-group">
                    <label>Tags (press Enter to add)</label>
                    <div class="tags-input" id="tagsInput">
                        <input type="text" id="tagInput" placeholder="Add tags...">
                    </div>
                    <div class="hint">Tags help you find presets later</div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" id="cancelSavePreset">Cancel</button>
                <button class="btn btn-primary" id="confirmSavePreset">Save Preset</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Modal event bindings
    const presetTags = [];
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeSaveModal();
        }
    });
    
    document.getElementById('cancelSavePreset').addEventListener('click', closeSaveModal);
    
    document.getElementById('confirmSavePreset').addEventListener('click', () => {
        const name = document.getElementById('presetName').value.trim();
        const desc = document.getElementById('presetDesc').value.trim();
        
        if (!name) {
            showToast('Please enter a name');
            return;
        }
        
        try {
            PresetManager.saveCurrentAsPreset(name, desc, [...presetTags]);
            closeSaveModal();
            renderCategoryTabs();
            currentCategory = 'custom';
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            document.querySelector('.category-tab[data-category="custom"]')?.classList.add('active');
            renderPresets('custom');
            showToast('Preset saved!');
        } catch (err) {
            showToast('Save failed: ' + err.message, 'error');
        }
    });
    
    // Tags input handling
    const tagInput = document.getElementById('tagInput');
    const tagsContainer = document.getElementById('tagsInput');
    
    tagInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const tag = tagInput.value.trim().toLowerCase();
            if (tag && !presetTags.includes(tag)) {
                presetTags.push(tag);
                renderTags();
            }
            tagInput.value = '';
        }
    });
    
    function renderTags() {
        const existing = tagsContainer.querySelectorAll('.tag-item');
        existing.forEach(t => t.remove());
        
        presetTags.forEach((tag, idx) => {
            const tagEl = document.createElement('span');
            tagEl.className = 'tag-item';
            tagEl.innerHTML = `${tag} <button data-idx="${idx}">&times;</button>`;
            tagsContainer.insertBefore(tagEl, tagInput);
        });
    }
    
    tagsContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.dataset.idx !== undefined) {
            presetTags.splice(parseInt(e.target.dataset.idx), 1);
            renderTags();
        }
    });
    
    window.presetModalTags = presetTags;
    window.renderPresetModalTags = renderTags;
}

function showSaveModal() {
    const modal = document.getElementById('savePresetModal');
    if (modal) {
        modal.classList.add('active');
        document.getElementById('presetName').value = '';
        document.getElementById('presetDesc').value = '';
        document.getElementById('tagInput').value = '';
        window.presetModalTags.length = 0;
        window.renderPresetModalTags();
        document.getElementById('presetName').focus();
    }
}

function closeSaveModal() {
    const modal = document.getElementById('savePresetModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function showToast(message, type = 'success') {
    // Remove existing toast
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        ${message}
    `;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: ${type === 'success' ? 'var(--success)' : 'var(--danger)'};
        color: white;
        padding: 12px 20px;
        border-radius: var(--radius);
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
        z-index: 1001;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add toast animations
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(toastStyle);