// Commercial presets for Neewer DL400 Studio
// Product shots need dramatic reveals, smooth showcases, and calculated pause timing
const commercialPresets = [
    {
        id: 'com_product_reveal',
        name: 'Product Reveal',
        category: 'commercial',
        description: 'Dramatic unveiling of product with hero moment pause',
        author: 'System',
        tags: ['product', 'reveal', 'dramatic'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 4000 } },    // Slow approach building anticipation
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveLeft', params: { duration: 5000 } },    // Accelerated reveal motion
            { type: 'wait', params: { duration: 8000 } },        // Hero pause - let product shine
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 6000 } },   // Pull back for full product view
            { type: 'wait', params: { duration: 6000 } }         // Final glamour pause
        ]
    },
    {
        id: 'com_360_showcase',
        name: '360° Showcase',
        category: 'commercial',
        description: 'Continuous smooth rotation around product',
        author: 'System',
        tags: ['360', 'rotation', 'smooth'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 18000 } },  // Smooth complete orbit (continuous)
            { type: 'wait', params: { duration: 4000 } },        // Pause at highlight angle
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 14000 } },  // Continue orbit slower for details
            { type: 'wait', params: { duration: 3000 } },        // Brief highlight pause
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 12000 } }   // Complete the showcase
        ]
    },
    {
        id: 'com_table_sweep',
        name: 'Table Sweep',
        category: 'commercial',
        description: 'Product line display across tabletop coverage',
        author: 'System',
        tags: ['tabletop', 'sweep', 'product-line'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 10000 } },   // Pan across product lineup
            { type: 'wait', params: { duration: 5000 } },        // Pause on first product
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 12000 } },  // Continue sweep to next products
            { type: 'wait', params: { duration: 4000 } },        // Pause on hero product
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 8000 } },    // Return sweep
            { type: 'wait', params: { duration: 3000 } }         // Final pause
        ]
    },
    {
        id: 'com_luxury',
        name: 'Luxury Glamour',
        category: 'commercial',
        description: 'Ultra-slow premium product presentation',
        author: 'System',
        tags: ['luxury', 'premium', 'elegant'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 16000 } },  // Ultra-slow luxury drift
            { type: 'wait', params: { duration: 10000 } },       // Extended appreciation pause
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 8000 } },   // Subtle detail reveal
            { type: 'wait', params: { duration: 8000 } },        // Detail examination pause
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 12000 } },  // Final elegant drift
            { type: 'wait', params: { duration: 6000 } }         // Closing glamour
        ]
    },
    {
        id: 'com_dynamic_food',
        name: 'Food Photography',
        category: 'commercial',
        description: 'Appetizing food presentation with steam/detail pauses',
        author: 'System',
        tags: ['food', 'appetizing', 'detail'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 6000 } },    // Initial appetizing approach
            { type: 'wait', params: { duration: 6000 } },        // Steam/sizzle moment
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 8000 } },   // Pan across dish
            { type: 'wait', params: { duration: 5000 } },        // Texture detail pause
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 6000 } },    // Return to hero angle
            { type: 'wait', params: { duration: 4000 } }         // Final presentation
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = commercialPresets;
}