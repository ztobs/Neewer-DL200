// Real Estate presets for Neewer DL400 Studio
// Property showcases need smooth room reveals with feature highlight pauses
const realEstatePresets = [
    {
        id: 're_room_reveal',
        name: 'Room Reveal',
        category: 'real-estate',
        description: 'Smooth entrance revealing full room with feature pauses',
        author: 'System',
        tags: ['room', 'reveal', 'entrance'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 8000 } },    // Slow entrance into room
            { type: 'wait', params: { duration: 5000 } },        // Pause on room overview
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 10000 } },  // Pan across room features
            { type: 'wait', params: { duration: 4000 } },        // Feature highlight
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 6000 } },    // Return for full view
            { type: 'wait', params: { duration: 4000 } }         // Final room impression
        ]
    },
    {
        id: 're_walkthrough',
        name: 'Property Walkthrough',
        category: 'real-estate',
        description: 'Continuous flowing movement through spaces',
        author: 'System',
        tags: ['walkthrough', 'continuous', 'flow'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 12000 } },  // Moving through first space
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 8000 } },   // Transition zone slower
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 10000 } },  // Next room coverage
            { type: 'wait', params: { duration: 3000 } },        // Brief pause at feature
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 8000 } }    // Continue through property
        ]
    },
    {
        id: 're_kitchen_showcase',
        name: 'Kitchen Showcase',
        category: 'real-estate',
        description: 'Countertop-level sweep highlighting appliances and surfaces',
        author: 'System',
        tags: ['kitchen', 'countertop', 'appliances'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 10000 } },   // Pan along countertops
            { type: 'wait', params: { duration: 4000 } },        // Appliance highlight
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 8000 } },   // Island/center focus
            { type: 'wait', params: { duration: 3000 } },        // Center highlight
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 6000 } },    // Continue coverage
            { type: 'wait', params: { duration: 3000 } }         // Final feature
        ]
    },
    {
        id: 're_window_view',
        name: 'Window & View',
        category: 'real-estate',
        description: 'Interior to exterior view reveal with light pause',
        author: 'System',
        tags: ['window', 'view', 'light'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 6000 } },   // Approach window
            { type: 'wait', params: { duration: 5000 } },        // View appreciation pause
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 8000 } },   // Pan along window expanse
            { type: 'wait', params: { duration: 4000 } },        // Light/view moment
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 6000 } },    // Return showing interior
            { type: 'wait', params: { duration: 3000 } }         // Final impression
        ]
    },
    {
        id: 're_exterior_sweep',
        name: 'Exterior Sweep',
        category: 'real-estate',
        description: 'Curb appeal shot with facade coverage',
        author: 'System',
        tags: ['exterior', 'curb-appeal', 'facade'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 12000 } },   // Full facade sweep
            { type: 'wait', params: { duration: 4000 } },        // Entrance highlight
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 10000 } },  // Continue facade coverage
            { type: 'wait', params: { duration: 3000 } },        // Architectural feature
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 8000 } },    // Return establishing
            { type: 'wait', params: { duration: 4000 } }         // Final curb appeal
        ]
    },
    {
        id: 're_bathroom_detail',
        name: 'Bathroom Detail',
        category: 'real-estate',
        description: 'Fixture and finish showcase movement',
        author: 'System',
        tags: ['bathroom', 'fixtures', 'finishes'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 6000 } },   // Pan to vanity
            { type: 'wait', params: { duration: 3000 } },        // Vanity highlight
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveLeft', params: { duration: 8000 } },    // Pan to shower/tub
            { type: 'wait', params: { duration: 4000 } },        // Shower/tub feature
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 5000 } },   // Full room view
            { type: 'wait', params: { duration: 3000 } }         // Final impression
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = realEstatePresets;
}