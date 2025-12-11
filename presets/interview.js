// Interview presets for Neewer DL400 Studio
// Interviews need extended dwell times during responses with smooth transitions between subjects
const interviewPresets = [
    {
        id: 'int_two_person',
        name: 'Two-Person Interview',
        category: 'interview',
        description: 'Back and forth between two subjects with natural rhythm',
        author: 'System',
        tags: ['two-shot', 'conversation', 'dialogue'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 6000 } },    // Pan to first speaker
            { type: 'wait', params: { duration: 15000 } },       // Long dwell for typical interview response (15s)
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 10000 } },  // Smooth pan to second speaker
            { type: 'wait', params: { duration: 18000 } },       // Extended dwell for follow-up response
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 8000 } },    // Return to first speaker
            { type: 'wait', params: { duration: 12000 } },       // Response dwell
            { type: 'moveRight', params: { duration: 6000 } },   // Quick response pan
            { type: 'wait', params: { duration: 14000 } }        // Final response dwell
        ]
    },
    {
        id: 'int_single_subject',
        name: 'Single Subject',
        category: 'interview',
        description: 'Subtle movement variations while focused on one person',
        author: 'System',
        tags: ['single', 'subtle', 'portrait'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 20000 } },  // Very subtle slow drift during long answer
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 12000 } },  // Slight reframe
            { type: 'wait', params: { duration: 8000 } },        // Pause during emotional moment
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 16000 } },  // Continue subtle drift
            { type: 'wait', params: { duration: 6000 } },        // Brief pause
            { type: 'moveRight', params: { duration: 8000 } }    // Closing subtle movement
        ]
    },
    {
        id: 'int_contemplative',
        name: 'Emotional Moment',
        category: 'interview',
        description: 'Very slow drift with breathing room for emotional storytelling',
        author: 'System',
        tags: ['emotional', 'slow', 'intimate'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 25000 } },   // Ultra-slow drift for emotional weight
            { type: 'wait', params: { duration: 10000 } },       // Long pause for emotional processing
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 6000 } },    // Brief slight adjustment
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 22000 } },   // Continued contemplative drift
            { type: 'wait', params: { duration: 12000 } },       // Extended emotional pause
            { type: 'moveLeft', params: { duration: 18000 } }    // Final slow movement
        ]
    },
    {
        id: 'int_panel',
        name: 'Panel Discussion',
        category: 'interview',
        description: 'Sweeping motion across multiple participants with focus dwells',
        author: 'System',
        tags: ['panel', 'group', 'sweep'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 5000 } },    // Initial position
            { type: 'wait', params: { duration: 10000 } },       // First panelist speaking
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 10000 } },  // Sweep to second panelist
            { type: 'wait', params: { duration: 12000 } },       // Second panelist response
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 12000 } },   // Pan to third panelist
            { type: 'wait', params: { duration: 10000 } },       // Third response
            { type: 'moveRight', params: { duration: 6000 } }    // Return coverage
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = interviewPresets;
}