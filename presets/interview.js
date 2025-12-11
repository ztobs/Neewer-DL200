// Interview presets for Neewer DL400 Studio
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
            { type: 'moveLeft', params: { duration: 5000 } },
            { type: 'wait', params: { duration: 8000 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 10000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 8000 } },
            { type: 'wait', params: { duration: 7000 } },
            { type: 'moveRight', params: { duration: 6000 } },
            { type: 'wait', params: { duration: 9000 } }
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
            { type: 'moveRight', params: { duration: 10000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 8000 } },
            { type: 'wait', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 11000 } },
            { type: 'wait', params: { duration: 3000 } },
            { type: 'moveRight', params: { duration: 5000 } }
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
            { type: 'moveLeft', params: { duration: 14000 } },
            { type: 'wait', params: { duration: 6000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 15000 } },
            { type: 'wait', params: { duration: 8000 } },
            { type: 'moveLeft', params: { duration: 14000 } }
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
            { type: 'moveLeft', params: { duration: 4000 } },
            { type: 'wait', params: { duration: 6000 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 7000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 11000 } },
            { type: 'wait', params: { duration: 6000 } },
            { type: 'moveRight', params: { duration: 4000 } }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = interviewPresets;
}