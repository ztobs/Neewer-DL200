// Education presets for Neewer DL400 Studio
const educationPresets = [
    {
        id: 'edu_whiteboard',
        name: 'Whiteboard Pan',
        category: 'education',
        description: 'Smooth pan across whiteboard with reading pauses',
        author: 'System',
        tags: ['whiteboard', 'presentation', 'teaching'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 4000 } },
            { type: 'wait', params: { duration: 6000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 4000 } },
            { type: 'moveRight', params: { duration: 4000 } }
        ]
    },
    {
        id: 'edu_demonstration',
        name: 'Demo Follow',
        category: 'education',
        description: 'Following hands during demonstration with focus points',
        author: 'System',
        tags: ['demo', 'hands', 'tutorial'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 3000 } },
            { type: 'wait', params: { duration: 3000 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 8400 } },
            { type: 'wait', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 6600 } },
            { type: 'wait', params: { duration: 3000 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 7600 } }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = educationPresets;
}