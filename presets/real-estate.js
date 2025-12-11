// Real Estate presets for Neewer DL400 Studio
const realEstatePresets = [
    {
        id: 're_room_reveal',
        name: 'Room Reveal',
        category: 'real_estate',
        description: 'Smooth reveal of interior space with feature highlights',
        author: 'System',
        tags: ['interior', 'room', 'reveal'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 3000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 8000 } },
            { type: 'wait', params: { duration: 2000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 3000 } },
            { type: 'moveRight', params: { duration: 4000 } }
        ]
    },
    {
        id: 're_walkthrough',
        name: 'Virtual Walkthrough',
        category: 'real_estate',
        description: 'Steady motion simulating walking through space with pauses',
        author: 'System',
        tags: ['walkthrough', 'tour', 'steady'],
        steps: [
            { type: 'accel', params: { accel: 'constant' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 3000 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveLeft', params: { duration: 8000 } },
            { type: 'wait', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 10000 } },
            { type: 'wait', params: { duration: 3000 } },
            { type: 'moveLeft', params: { duration: 9000 } }
        ]
    },
    {
        id: 're_detail_pan',
        name: 'Luxury Detail Pan',
        category: 'real_estate',
        description: 'Slow pan highlighting premium finishes with dwells',
        author: 'System',
        tags: ['luxury', 'detail', 'finishes'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 3000 } },
            { type: 'wait', params: { duration: 3000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 4000 } },
            { type: 'moveRight', params: { duration: 4000 } }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = realEstatePresets;
}