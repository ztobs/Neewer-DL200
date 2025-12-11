// Preset Manager for Neewer DL400 Studio
// Modular architecture - presets are loaded from separate files in /presets/

const PresetManager = (function() {
    const STORAGE_KEY = 'neewer_dl400_custom_presets';
    
    // Built-in presets loaded from modules (populated by loadPresetModules)
    let builtInPresets = {
        documentary: [],
        interview: [],
        commercial: [],
        film: [],
        timelapse: [],
        social: [],
        real_estate: [],
        education: []
    };

    // Category metadata
    const categories = {
        documentary: { name: 'Documentary', icon: 'fas fa-film', color: '#4CAF50' },
        interview: { name: 'Interview', icon: 'fas fa-comments', color: '#2196F3' },
        commercial: { name: 'Commercial', icon: 'fas fa-ad', color: '#FF9800' },
        film: { name: 'Film/Cinema', icon: 'fas fa-video', color: '#E91E63' },
        timelapse: { name: 'Time-lapse', icon: 'fas fa-hourglass-half', color: '#9C27B0' },
        social: { name: 'Social Media', icon: 'fas fa-share-alt', color: '#00BCD4' },
        real_estate: { name: 'Real Estate', icon: 'fas fa-home', color: '#795548' },
        education: { name: 'Education', icon: 'fas fa-graduation-cap', color: '#607D8B' },
        custom: { name: 'My Presets', icon: 'fas fa-star', color: '#FFC107' }
    };

    // Initialize presets from loaded modules
    function initializePresets() {
        // Check if preset modules are loaded as globals
        if (typeof documentaryPresets !== 'undefined') {
            builtInPresets.documentary = documentaryPresets;
        }
        if (typeof interviewPresets !== 'undefined') {
            builtInPresets.interview = interviewPresets;
        }
        if (typeof commercialPresets !== 'undefined') {
            builtInPresets.commercial = commercialPresets;
        }
        if (typeof filmPresets !== 'undefined') {
            builtInPresets.film = filmPresets;
        }
        if (typeof timelapsePresets !== 'undefined') {
            builtInPresets.timelapse = timelapsePresets;
        }
        if (typeof socialPresets !== 'undefined') {
            builtInPresets.social = socialPresets;
        }
        if (typeof realEstatePresets !== 'undefined') {
            builtInPresets.real_estate = realEstatePresets;
        }
        if (typeof educationPresets !== 'undefined') {
            builtInPresets.education = educationPresets;
        }
        console.log('PresetManager: Presets initialized');
    }

    // Get custom presets from localStorage
    function getCustomPresets() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error('Error loading custom presets:', e);
            return [];
        }
    }

    // Save custom presets to localStorage
    function saveCustomPresets(presets) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
        } catch (e) {
            console.error('Error saving custom presets:', e);
        }
    }

    // Get all presets (built-in + custom)
    function getAllPresets() {
        const all = { ...builtInPresets };
        all.custom = getCustomPresets();
        return all;
    }

    // Get presets by category
    function getPresetsByCategory(category) {
        if (category === 'custom') {
            return getCustomPresets();
        }
        return builtInPresets[category] || [];
    }

    // Get a specific preset by ID
    function getPresetById(id) {
        // Search built-in presets
        for (const category in builtInPresets) {
            const found = builtInPresets[category].find(p => p.id === id);
            if (found) return found;
        }
        // Search custom presets
        const customPresets = getCustomPresets();
        return customPresets.find(p => p.id === id);
    }

    // Save current sequence as a custom preset
    function saveCurrentAsPreset(name, description, tags = []) {
        const steps = Sequencer.getSteps();
        if (steps.length === 0) {
            throw new Error('No steps to save');
        }

        const preset = {
            id: 'custom_' + Date.now(),
            name: name,
            category: 'custom',
            description: description,
            author: 'User',
            tags: tags,
            createdAt: new Date().toISOString(),
            steps: steps.map(step => ({
                type: step.type,
                params: {
                    duration: step.duration,
                    speed: step.speed,
                    accel: step.accel,
                    direction: step.direction,
                    count: step.params?.count
                }
            }))
        };

        const customPresets = getCustomPresets();
        customPresets.push(preset);
        saveCustomPresets(customPresets);

        return preset;
    }

    // Delete a custom preset
    function deleteCustomPreset(id) {
        const customPresets = getCustomPresets();
        const filtered = customPresets.filter(p => p.id !== id);
        saveCustomPresets(filtered);
    }

    // Update a custom preset
    function updateCustomPreset(id, updates) {
        const customPresets = getCustomPresets();
        const index = customPresets.findIndex(p => p.id === id);
        if (index !== -1) {
            customPresets[index] = { ...customPresets[index], ...updates };
            saveCustomPresets(customPresets);
            return customPresets[index];
        }
        return null;
    }

    // Load preset into sequencer
    function loadPreset(preset) {
        Sequencer.clearAllSteps();
        preset.steps.forEach(stepData => {
            const step = new Sequencer.Step(stepData.type, stepData.params);
            Sequencer.addStep(step);
        });
        console.log(`Loaded preset: ${preset.name}`);
    }

    // Export preset to JSON file
    function exportPresetToFile(preset) {
        const exportData = {
            version: '1.0',
            exportedAt: new Date().toISOString(),
            preset: preset
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `preset_${preset.name.toLowerCase().replace(/\s+/g, '_')}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Export all custom presets to JSON file
    function exportAllCustomPresets() {
        const customPresets = getCustomPresets();
        if (customPresets.length === 0) {
            throw new Error('No custom presets to export');
        }

        const exportData = {
            version: '1.0',
            exportedAt: new Date().toISOString(),
            presets: customPresets
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `neewer_presets_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Import preset from JSON file
    function importPresetFromFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    
                    // Handle single preset or multiple presets
                    if (data.preset) {
                        // Single preset
                        const preset = data.preset;
                        preset.id = 'custom_' + Date.now();
                        preset.category = 'custom';
                        preset.importedAt = new Date().toISOString();
                        
                        const customPresets = getCustomPresets();
                        customPresets.push(preset);
                        saveCustomPresets(customPresets);
                        resolve([preset]);
                    } else if (data.presets && Array.isArray(data.presets)) {
                        // Multiple presets
                        const importedPresets = [];
                        const customPresets = getCustomPresets();
                        
                        data.presets.forEach((preset, idx) => {
                            preset.id = 'custom_' + Date.now() + '_' + idx;
                            preset.category = 'custom';
                            preset.importedAt = new Date().toISOString();
                            customPresets.push(preset);
                            importedPresets.push(preset);
                        });
                        
                        saveCustomPresets(customPresets);
                        resolve(importedPresets);
                    } else {
                        reject(new Error('Invalid preset file format'));
                    }
                } catch (err) {
                    reject(new Error('Failed to parse preset file: ' + err.message));
                }
            };
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsText(file);
        });
    }

    // Export current sequence to JSON file
    function exportCurrentSequence(name = 'My Sequence') {
        const steps = Sequencer.getSteps();
        if (steps.length === 0) {
            throw new Error('No steps to export');
        }

        const exportData = {
            version: '1.0',
            exportedAt: new Date().toISOString(),
            preset: {
                id: 'exported_' + Date.now(),
                name: name,
                category: 'custom',
                description: 'Exported sequence',
                author: 'User',
                tags: [],
                steps: steps.map(step => ({
                    type: step.type,
                    params: {
                        duration: step.duration,
                        speed: step.speed,
                        accel: step.accel,
                        direction: step.direction,
                        count: step.params?.count
                    }
                }))
            }
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sequence_${name.toLowerCase().replace(/\s+/g, '_')}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Get category info
    function getCategoryInfo(categoryId) {
        return categories[categoryId] || { name: categoryId, icon: 'fas fa-folder', color: '#666' };
    }

    // Get all categories
    function getCategories() {
        return categories;
    }

    // Search presets
    function searchPresets(query) {
        const results = [];
        const q = query.toLowerCase();
        const allPresets = getAllPresets();
        
        for (const category in allPresets) {
            allPresets[category].forEach(preset => {
                const matchName = preset.name.toLowerCase().includes(q);
                const matchDesc = preset.description?.toLowerCase().includes(q);
                const matchTags = preset.tags?.some(tag => tag.toLowerCase().includes(q));
                
                if (matchName || matchDesc || matchTags) {
                    results.push(preset);
                }
            });
        }
        
        return results;
    }

    // Format duration for display
    function formatDuration(ms) {
        if (ms >= 3600000) {
            const hours = Math.floor(ms / 3600000);
            const mins = Math.floor((ms % 3600000) / 60000);
            return `${hours}h ${mins}m`;
        } else if (ms >= 60000) {
            const mins = Math.floor(ms / 60000);
            const secs = Math.floor((ms % 60000) / 1000);
            return `${mins}m ${secs}s`;
        } else {
            return `${(ms / 1000).toFixed(1)}s`;
        }
    }

    // Calculate total duration of a preset
    function getPresetDuration(preset) {
        let total = 0;
        preset.steps.forEach(step => {
            if (step.params?.duration) {
                total += step.params.duration;
            }
        });
        return total;
    }

    return {
        initializePresets,
        getAllPresets,
        getPresetsByCategory,
        getPresetById,
        getCategories,
        getCategoryInfo,
        saveCurrentAsPreset,
        deleteCustomPreset,
        updateCustomPreset,
        loadPreset,
        exportPresetToFile,
        exportAllCustomPresets,
        importPresetFromFile,
        exportCurrentSequence,
        searchPresets,
        formatDuration,
        getPresetDuration,
        getCustomPresets
    };
})();

// Export
window.PresetManager = PresetManager;