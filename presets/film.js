// Film/Cinema presets for Neewer DL400 Studio
const filmPresets = [
    {
        id: 'film_dramatic_entrance',
        name: 'Dramatic Entrance',
        category: 'film',
        description: 'Speed ramp reveal for character introduction with tension',
        author: 'System',
        tags: ['entrance', 'character', 'reveal'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveLeft', params: { duration: 3600 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveLeft', params: { duration: 5400 } },
            { type: 'wait', params: { duration: 1000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 2000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 7000 } }
        ]
    },
    {
        id: 'film_tension',
        name: 'Tension Build',
        category: 'film',
        description: 'Accelerating motion building suspense step by step',
        author: 'System',
        tags: ['tension', 'suspense', 'thriller'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 7600 } },
            { type: 'wait', params: { duration: 3000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 5400 } },
            { type: 'wait', params: { duration: 2000 } },
            { type: 'speed', params: { speed: 4 } },
            { type: 'moveRight', params: { duration: 5000 } },
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveRight', params: { duration: 1800 } }
        ]
    },
    {
        id: 'film_contemplative',
        name: 'Contemplative Drift',
        category: 'film',
        description: 'Slow thoughtful movement with meditative pauses',
        author: 'System',
        tags: ['emotional', 'slow', 'drama'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 11000 } },
            { type: 'wait', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 11000 } },
            { type: 'wait', params: { duration: 5000 } },
            { type: 'moveLeft', params: { duration: 12000 } }
        ]
    },
    {
        id: 'film_action',
        name: 'Action Sequence',
        category: 'film',
        description: 'Fast dynamic motion with quick direction changes',
        author: 'System',
        tags: ['action', 'fast', 'dynamic'],
        steps: [
            { type: 'accel', params: { accel: 'constant' } },
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveRight', params: { duration: 4400 } },
            { type: 'speed', params: { speed: 4 } },
            { type: 'moveLeft', params: { duration: 2800 } },
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveRight', params: { duration: 4800 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveLeft', params: { duration: 2000 } },
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveRight', params: { duration: 5800 } }
        ]
    },
    {
        id: 'film_dolly_zoom',
        name: 'Vertigo Effect',
        category: 'film',
        description: 'Speed change simulating dolly zoom feel with nuance',
        author: 'System',
        tags: ['vertigo', 'hitchcock', 'effect'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 4 } },
            { type: 'moveLeft', params: { duration: 4400 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 7000 } },
            { type: 'wait', params: { duration: 2000 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveLeft', params: { duration: 5400 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 7000 } }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = filmPresets;
}