// Film/Cinema presets for Neewer DL400 Studio
// Cinematic movements with dramatic timing - action stays fast, drama goes slow
const filmPresets = [
    {
        id: 'film_tracking',
        name: 'Tracking Shot',
        category: 'film',
        description: 'Smooth following motion matched to walking pace',
        author: 'System',
        tags: ['tracking', 'follow', 'walk'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 4 } },
            { type: 'moveRight', params: { duration: 12000 } },  // Match typical walking pace
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 8000 } },   // Slow for subject pause
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveRight', params: { duration: 10000 } },  // Quick catch-up movement
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 6000 } }    // Settle with subject
        ]
    },
    {
        id: 'film_dolly_in',
        name: 'Dolly In Dramatic',
        category: 'film',
        description: 'Slow, deliberate push-in for dramatic emphasis',
        author: 'System',
        tags: ['dolly', 'push-in', 'dramatic'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 22000 } },   // Very slow dramatic push
            { type: 'wait', params: { duration: 8000 } },        // Dramatic pause at apex
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 6000 } },    // Final subtle closer
            { type: 'wait', params: { duration: 6000 } }         // Hold on subject
        ]
    },
    {
        id: 'film_action_pan',
        name: 'Action Sequence',
        category: 'film',
        description: 'Quick dynamic movements for high-energy scenes',
        author: 'System',
        tags: ['action', 'fast', 'dynamic'],
        steps: [
            { type: 'accel', params: { accel: 'fast' } },
            { type: 'speed', params: { speed: 8 } },
            { type: 'moveRight', params: { duration: 2500 } },   // Whip pan (keep fast!)
            { type: 'speed', params: { speed: 6 } },
            { type: 'moveLeft', params: { duration: 3000 } },    // Quick reaction pan
            { type: 'speed', params: { speed: 9 } },
            { type: 'moveRight', params: { duration: 2000 } },   // Snap to action
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveLeft', params: { duration: 4000 } },    // Follow-through
            { type: 'speed', params: { speed: 7 } },
            { type: 'moveRight', params: { duration: 2500 } }    // Final action beat
        ]
    },
    {
        id: 'film_contemplative',
        name: 'Contemplative',
        category: 'film',
        description: 'Ultra-slow movement for introspective moments',
        author: 'System',
        tags: ['slow', 'contemplative', 'mood'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 28000 } },   // Glacially slow for mood
            { type: 'wait', params: { duration: 12000 } },       // Extended contemplation pause
            { type: 'moveLeft', params: { duration: 20000 } },   // Continue imperceptible drift
            { type: 'wait', params: { duration: 10000 } }        // Final meditation pause
        ]
    },
    {
        id: 'film_reveal',
        name: 'Cinematic Reveal',
        category: 'film',
        description: 'Dramatic reveal from detail to wide shot',
        author: 'System',
        tags: ['reveal', 'dramatic', 'wide'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'wait', params: { duration: 5000 } },        // Build anticipation
            { type: 'moveRight', params: { duration: 14000 } },  // Slow reveal movement
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 8000 } },   // Accelerate into reveal
            { type: 'wait', params: { duration: 8000 } },        // Hold on revealed scene
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 6000 } }    // Final settle
        ]
    },
    {
        id: 'film_establishing',
        name: 'Establishing Shot',
        category: 'film',
        description: 'Wide sweeping movement to set the scene',
        author: 'System',
        tags: ['establishing', 'wide', 'scene'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 18000 } },   // Grand sweeping scene coverage
            { type: 'wait', params: { duration: 6000 } },        // Let audience absorb setting
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 12000 } },  // Continue coverage
            { type: 'wait', params: { duration: 4000 } },        // Pause on key landmark
            { type: 'moveLeft', params: { duration: 8000 } }     // Final scene establishment
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = filmPresets;
}