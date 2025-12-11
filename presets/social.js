// Social Media presets for Neewer DL400 Studio
// Short attention span content - keep movements punchy and dynamic (2-5s max)
const socialPresets = [
    {
        id: 'soc_tiktok_reveal',
        name: 'TikTok Reveal',
        category: 'social',
        description: 'Fast punchy movement for vertical video reveals',
        author: 'System',
        tags: ['tiktok', 'short', 'vertical'],
        steps: [
            { type: 'accel', params: { accel: 'fast' } },
            { type: 'speed', params: { speed: 7 } },
            { type: 'moveLeft', params: { duration: 1500 } },    // Quick setup
            { type: 'wait', params: { duration: 2000 } },        // Brief hook pause
            { type: 'speed', params: { speed: 9 } },
            { type: 'moveRight', params: { duration: 2000 } },   // Snap reveal
            { type: 'wait', params: { duration: 3000 } },        // Show result
            { type: 'speed', params: { speed: 6 } },
            { type: 'moveLeft', params: { duration: 2500 } }     // Quick outro movement
        ]
    },
    {
        id: 'soc_instagram_story',
        name: 'Instagram Story',
        category: 'social',
        description: '15-second optimized story content movement',
        author: 'System',
        tags: ['instagram', 'story', '15sec'],
        steps: [
            { type: 'accel', params: { accel: 'fast' } },
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveRight', params: { duration: 3000 } },   // Opening movement
            { type: 'wait', params: { duration: 2500 } },        // Focus moment
            { type: 'speed', params: { speed: 6 } },
            { type: 'moveLeft', params: { duration: 3500 } },    // Dynamic pan
            { type: 'wait', params: { duration: 2000 } },        // Highlight pause
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveRight', params: { duration: 3000 } }    // Close movement
        ]
    },
    {
        id: 'soc_youtube_short',
        name: 'YouTube Short',
        category: 'social',
        description: 'Attention-grabbing movement for 60-second shorts',
        author: 'System',
        tags: ['youtube', 'shorts', 'dynamic'],
        steps: [
            { type: 'accel', params: { accel: 'fast' } },
            { type: 'speed', params: { speed: 6 } },
            { type: 'moveLeft', params: { duration: 4000 } },    // Hook movement
            { type: 'wait', params: { duration: 3000 } },        // Content beat
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveRight', params: { duration: 5000 } },   // Main content pan
            { type: 'wait', params: { duration: 2500 } },        // Focus beat
            { type: 'speed', params: { speed: 7 } },
            { type: 'moveLeft', params: { duration: 3000 } },    // Energy movement
            { type: 'wait', params: { duration: 2000 } }         // Outro beat
        ]
    },
    {
        id: 'soc_product_unbox',
        name: 'Unboxing Content',
        category: 'social',
        description: 'Dynamic unboxing reveal movements',
        author: 'System',
        tags: ['unboxing', 'reveal', 'product'],
        steps: [
            { type: 'accel', params: { accel: 'fast' } },
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveRight', params: { duration: 2500 } },   // Box approach
            { type: 'wait', params: { duration: 2000 } },        // Box reveal pause
            { type: 'speed', params: { speed: 8 } },
            { type: 'moveLeft', params: { duration: 1500 } },    // Quick reaction shot
            { type: 'speed', params: { speed: 4 } },
            { type: 'moveRight', params: { duration: 3500 } },   // Product reveal pan
            { type: 'wait', params: { duration: 3000 } },        // Hero product pause
            { type: 'speed', params: { speed: 6 } },
            { type: 'moveLeft', params: { duration: 2000 } }     // Quick closing
        ]
    },
    {
        id: 'soc_vlog_b_roll',
        name: 'Vlog B-Roll',
        category: 'social',
        description: 'Quick dynamic b-roll cuts for vlogs',
        author: 'System',
        tags: ['vlog', 'b-roll', 'quick'],
        steps: [
            { type: 'accel', params: { accel: 'fast' } },
            { type: 'speed', params: { speed: 6 } },
            { type: 'moveLeft', params: { duration: 2500 } },    // Quick b-roll shot 1
            { type: 'speed', params: { speed: 7 } },
            { type: 'moveRight', params: { duration: 2000 } },   // Snap to shot 2
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveLeft', params: { duration: 3000 } },    // Shot 3
            { type: 'speed', params: { speed: 8 } },
            { type: 'moveRight', params: { duration: 2000 } },   // Quick transition
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveLeft', params: { duration: 2500 } }     // Final b-roll
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = socialPresets;
}