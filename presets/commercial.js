// Commercial presets for Neewer DL400 Studio
const commercialPresets = [
    {
        id: 'com_product_reveal',
        name: 'Product Reveal',
        category: 'commercial',
        description: 'Dramatic reveal building anticipation with speed variations',
        author: 'System',
        tags: ['reveal', 'dramatic', 'hero'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveLeft', params: { duration: 7000 } },
            { type: 'speed', params: { speed: 4 } },
            { type: 'moveLeft', params: { duration: 3000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 7000 } },
            { type: 'wait', params: { duration: 2000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 6000 } }
        ]
    },
    {
        id: 'com_showcase_360',
        name: '360 Showcase',
        category: 'commercial',
        description: 'Complete pass around product with detail pauses',
        author: 'System',
        tags: ['360', 'product', 'rotation'],
        steps: [
            { type: 'accel', params: { accel: 'constant' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 2000 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 10000 } },
            { type: 'wait', params: { duration: 2000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 11000 } }
        ]
    },
    {
        id: 'com_hero_shot',
        name: 'Hero Shot',
        category: 'commercial',
        description: 'Dynamic speed ramps for maximum impact',
        author: 'System',
        tags: ['hero', 'dynamic', 'impact'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 5000 } },
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveRight', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 5000 } }
        ]
    },
    {
        id: 'com_tabletop',
        name: 'Tabletop Slide',
        category: 'commercial',
        description: 'Smooth constant motion for food/product with feature highlights',
        author: 'System',
        tags: ['food', 'tabletop', 'smooth'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 3000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 8000 } },
            { type: 'wait', params: { duration: 2000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 3000 } },
            { type: 'moveLeft', params: { duration: 4000 } }
        ]
    },
    {
        id: 'com_luxury',
        name: 'Luxury Product',
        category: 'commercial',
        description: 'Ultra-smooth slow reveal for high-end products with elegance',
        author: 'System',
        tags: ['luxury', 'elegant', 'slow'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 11000 } },
            { type: 'wait', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 10000 } },
            { type: 'wait', params: { duration: 5000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 4000 } },
            { type: 'moveLeft', params: { duration: 11000 } }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = commercialPresets;
}