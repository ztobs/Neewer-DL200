// Preset Manager for Neewer DL400 Studio
// Provides professional presets and custom preset management

const PresetManager = (function() {
    const STORAGE_KEY = 'neewer_dl400_custom_presets';
    
    // Built-in professional presets organized by category
    // Each preset has multiple steps for varied, realistic camera movements
    const builtInPresets = {
        documentary: [
            {
                id: 'doc_establishing',
                name: 'Establishing Shot',
                category: 'documentary',
                description: 'Slow pan across a scene for context setting with speed variations',
                author: 'System',
                tags: ['slow', 'landscape', 'opening'],
                steps: [
                    { type: 'accel', params: { accel: 'slow' } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 3000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 4000 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 3000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 3500 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 4000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 2500 } }
                ]
            },
            {
                id: 'doc_subject_follow',
                name: 'Subject Follow',
                category: 'documentary',
                description: 'Smooth tracking shot following a subject with anticipation',
                author: 'System',
                tags: ['tracking', 'subject', 'smooth'],
                steps: [
                    { type: 'accel', params: { accel: 'slow' } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 3000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 3000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 3000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2000 } }
                ]
            },
            {
                id: 'doc_detail_reveal',
                name: 'Detail B-Roll',
                category: 'documentary',
                description: 'Slow reveal of intricate details with multiple passes',
                author: 'System',
                tags: ['detail', 'close-up', 'reveal'],
                steps: [
                    { type: 'accel', params: { accel: 'slow' } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 1000 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 3000 } }
                ]
            },
            {
                id: 'doc_evidence',
                name: 'Evidence Pan',
                category: 'documentary',
                description: 'Methodical pan across documents with examination pauses',
                author: 'System',
                tags: ['pan', 'evidence', 'investigation'],
                steps: [
                    { type: 'accel', params: { accel: 'constant' } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 2500 } },
                    { type: 'moveRight', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 3000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'moveRight', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 3000 } }
                ]
            }
        ],
        interview: [
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
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 4000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 5000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 3500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 3000 } },
                    { type: 'wait', params: { duration: 4500 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 3000 } }
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
                    { type: 'moveRight', params: { duration: 3000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 4000 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'moveRight', params: { duration: 3000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 3500 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'moveRight', params: { duration: 2500 } }
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
                    { type: 'moveLeft', params: { duration: 4000 } },
                    { type: 'wait', params: { duration: 3000 } },
                    { type: 'moveLeft', params: { duration: 3000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 4000 } },
                    { type: 'wait', params: { duration: 4000 } },
                    { type: 'moveLeft', params: { duration: 3500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 4000 } },
                    { type: 'wait', params: { duration: 2500 } },
                    { type: 'moveLeft', params: { duration: 3000 } }
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
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 3000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 3500 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 3000 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 3000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 2500 } }
                ]
            }
        ],
        commercial: [
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
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 1500 } }
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
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 1500 } }
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
                    { type: 'moveRight', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveRight', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 5 } },
                    { type: 'moveRight', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveRight', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 1500 } }
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
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 2000 } }
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
                    { type: 'moveRight', params: { duration: 3000 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'moveRight', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 3000 } },
                    { type: 'wait', params: { duration: 2500 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 3000 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'moveLeft', params: { duration: 2500 } }
                ]
            }
        ],
        film: [
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
                    { type: 'moveLeft', params: { duration: 800 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveLeft', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 1200 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 1000 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 2000 } }
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
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'moveRight', params: { duration: 1800 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 1000 } },
                    { type: 'moveRight', params: { duration: 1200 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 1000 } },
                    { type: 'wait', params: { duration: 500 } },
                    { type: 'moveRight', params: { duration: 800 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveRight', params: { duration: 700 } },
                    { type: 'moveRight', params: { duration: 600 } },
                    { type: 'speed', params: { speed: 5 } },
                    { type: 'moveRight', params: { duration: 500 } },
                    { type: 'moveRight', params: { duration: 400 } }
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
                    { type: 'moveLeft', params: { duration: 3000 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 3000 } },
                    { type: 'wait', params: { duration: 2500 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 3500 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'moveLeft', params: { duration: 2500 } }
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
                    { type: 'moveRight', params: { duration: 1200 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveLeft', params: { duration: 800 } },
                    { type: 'speed', params: { speed: 5 } },
                    { type: 'moveRight', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveLeft', params: { duration: 600 } },
                    { type: 'speed', params: { speed: 5 } },
                    { type: 'moveRight', params: { duration: 1400 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 5 } },
                    { type: 'moveRight', params: { duration: 800 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveLeft', params: { duration: 700 } },
                    { type: 'speed', params: { speed: 5 } },
                    { type: 'moveRight', params: { duration: 1500 } }
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
                    { type: 'moveLeft', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 1200 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 1200 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 2000 } }
                ]
            }
        ],
        timelapse: [
            {
                id: 'tl_sunrise_sunset',
                name: 'Sunrise/Sunset',
                category: 'timelapse',
                description: 'Ultra-slow 1-hour slide for golden hour',
                author: 'System',
                tags: ['golden-hour', 'landscape', 'long'],
                steps: [
                    { type: 'accel', params: { accel: 'constant' } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 3600000 } }
                ]
            },
            {
                id: 'tl_clouds',
                name: 'Cloud Motion',
                category: 'timelapse',
                description: 'Medium pace for cloud time-lapse',
                author: 'System',
                tags: ['clouds', 'sky', 'medium'],
                steps: [
                    { type: 'accel', params: { accel: 'constant' } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 1800000 } }
                ]
            },
            {
                id: 'tl_stars',
                name: 'Star Trail',
                category: 'timelapse',
                description: 'Extended ultra-slow for astrophotography',
                author: 'System',
                tags: ['stars', 'night', 'astro'],
                steps: [
                    { type: 'accel', params: { accel: 'constant' } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 7200000 } }
                ]
            },
            {
                id: 'tl_cityscape',
                name: 'City Day-to-Night',
                category: 'timelapse',
                description: 'Extended slide capturing city transformation',
                author: 'System',
                tags: ['city', 'transition', 'urban'],
                steps: [
                    { type: 'accel', params: { accel: 'constant' } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 5400000 } }
                ]
            }
        ],
        social: [
            {
                id: 'social_instagram',
                name: 'Instagram Product',
                category: 'social',
                description: 'Punchy motion with attention-grabbing rhythm',
                author: 'System',
                tags: ['instagram', 'reel', 'quick'],
                steps: [
                    { type: 'accel', params: { accel: 'slow' } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 1200 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveRight', params: { duration: 1000 } },
                    { type: 'wait', params: { duration: 500 } },
                    { type: 'speed', params: { speed: 5 } },
                    { type: 'moveLeft', params: { duration: 800 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveLeft', params: { duration: 1000 } },
                    { type: 'wait', params: { duration: 600 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 1200 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveRight', params: { duration: 800 } },
                    { type: 'wait', params: { duration: 400 } },
                    { type: 'speed', params: { speed: 5 } },
                    { type: 'moveLeft', params: { duration: 1000 } }
                ]
            },
            {
                id: 'social_youtube',
                name: 'YouTube B-Roll',
                category: 'social',
                description: 'Varied motion for YouTube content with style',
                author: 'System',
                tags: ['youtube', 'b-roll', 'content'],
                steps: [
                    { type: 'accel', params: { accel: 'slow' } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 1800 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 800 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveRight', params: { duration: 1200 } },
                    { type: 'wait', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 1500 } }
                ]
            },
            {
                id: 'social_tiktok',
                name: 'TikTok Hook',
                category: 'social',
                description: 'Fast attention-grabbing motion sequence',
                author: 'System',
                tags: ['tiktok', 'fast', 'hook'],
                steps: [
                    { type: 'accel', params: { accel: 'constant' } },
                    { type: 'speed', params: { speed: 5 } },
                    { type: 'moveRight', params: { duration: 600 } },
                    { type: 'moveLeft', params: { duration: 500 } },
                    { type: 'moveRight', params: { duration: 700 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveLeft', params: { duration: 600 } },
                    { type: 'speed', params: { speed: 5 } },
                    { type: 'moveRight', params: { duration: 800 } },
                    { type: 'moveLeft', params: { duration: 500 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveRight', params: { duration: 700 } },
                    { type: 'speed', params: { speed: 5 } },
                    { type: 'moveLeft', params: { duration: 600 } },
                    { type: 'moveRight', params: { duration: 900 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveLeft', params: { duration: 500 } },
                    { type: 'speed', params: { speed: 5 } },
                    { type: 'moveRight', params: { duration: 800 } }
                ]
            },
            {
                id: 'social_unboxing',
                name: 'Unboxing Reveal',
                category: 'social',
                description: 'Dramatic product unboxing motion with reveal beats',
                author: 'System',
                tags: ['unboxing', 'reveal', 'product'],
                steps: [
                    { type: 'accel', params: { accel: 'slow' } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 1200 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 1000 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 4 } },
                    { type: 'moveLeft', params: { duration: 800 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 1000 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 1200 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 1500 } }
                ]
            }
        ],
        real_estate: [
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
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 1000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 2000 } }
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
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2500 } }
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
                    { type: 'moveRight', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 2000 } }
                ]
            }
        ],
        education: [
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
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveRight', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 3000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveLeft', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 2500 } },
                    { type: 'wait', params: { duration: 2500 } },
                    { type: 'speed', params: { speed: 1 } },
                    { type: 'moveRight', params: { duration: 2000 } }
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
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 1800 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 2200 } },
                    { type: 'wait', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 1500 } },
                    { type: 'wait', params: { duration: 1500 } },
                    { type: 'speed', params: { speed: 3 } },
                    { type: 'moveRight', params: { duration: 2000 } },
                    { type: 'speed', params: { speed: 2 } },
                    { type: 'moveLeft', params: { duration: 1800 } }
                ]
            }
        ]
    };

    // Category metadata
    const categories = {
        documentary: { name: 'Documentary', icon: 'fas fa-film', color: '#4CAF50' },
        interview: { name: 'Interview', icon: 'fas fa-comments', color: '#2196F3' },
        commercial: { name: 'Commercial', icon: 'fas fa-ad', color: '#FF9800' },
        film: { name: 'Film/Cinema', icon: 'fas fa-video', color: '#E91E63' },
        timelapse: { name: 'Time-lapse', icon: 'fas fa-hourglass-half', color: '#9C27B0' },
        social: { name: 'Social Media', icon: 'fas fa-share-alt', color: '#00BCD4' },
        real_estate: { name: 'Real Estate', icon: 'fas fa-home', color: '#795548' },
        education: { name: 'Education', icon: 'fas fa-graduation-cap', color: '#607D8B' },
        custom: { name: 'My Presets', icon: 'fas fa-star', color: '#FFC107' }
    };

    // Get custom presets from localStorage
    function getCustomPresets() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error('Error loading custom presets:', e);
            return [];
        }
    }

    // Save custom presets to localStorage
    function saveCustomPresets(presets) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
        } catch (e) {
            console.error('Error saving custom presets:', e);
        }
    }

    // Get all presets (built-in + custom)
    function getAllPresets() {
        const all = { ...builtInPresets };
        all.custom = getCustomPresets();
        return all;
    }

    // Get presets by category
    function getPresetsByCategory(category) {
        if (category === 'custom') {
            return getCustomPresets();
        }
        return builtInPresets[category] || [];
    }

    // Get a specific preset by ID
    function getPresetById(id) {
        // Search built-in presets
        for (const category in builtInPresets) {
            const found = builtInPresets[category].find(p => p.id === id);
            if (found) return found;
        }
        // Search custom presets
        const customPresets = getCustomPresets();
        return customPresets.find(p => p.id === id);
    }

    // Save current sequence as a custom preset
    function saveCurrentAsPreset(name, description, tags = []) {
        const steps = Sequencer.getSteps();
        if (steps.length === 0) {
            throw new Error('No steps to save');
        }

        const preset = {
            id: 'custom_' + Date.now(),
            name: name,
            category: 'custom',
            description: description,
            author: 'User',
            tags: tags,
            createdAt: new Date().toISOString(),
            steps: steps.map(step => ({
                type: step.type,
                params: {
                    duration: step.duration,
                    speed: step.speed,
                    accel: step.accel,
                    direction: step.direction,
                    count: step.params?.count
                }
            }))
        };

        const customPresets = getCustomPresets();
        customPresets.push(preset);
        saveCustomPresets(customPresets);

        return preset;
    }

    // Delete a custom preset
    function deleteCustomPreset(id) {
        const customPresets = getCustomPresets();
        const filtered = customPresets.filter(p => p.id !== id);
        saveCustomPresets(filtered);
    }

    // Update a custom preset
    function updateCustomPreset(id, updates) {
        const customPresets = getCustomPresets();
        const index = customPresets.findIndex(p => p.id === id);
        if (index !== -1) {
            customPresets[index] = { ...customPresets[index], ...updates };
            saveCustomPresets(customPresets);
            return customPresets[index];
        }
        return null;
    }

    // Load preset into sequencer
    function loadPreset(preset) {
        Sequencer.clearAllSteps();
        preset.steps.forEach(stepData => {
            const step = new Sequencer.Step(stepData.type, stepData.params);
            Sequencer.addStep(step);
        });
        console.log(`Loaded preset: ${preset.name}`);
    }

    // Export preset to JSON file
    function exportPresetToFile(preset) {
        const exportData = {
            version: '1.0',
            exportedAt: new Date().toISOString(),
            preset: preset
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `preset_${preset.name.toLowerCase().replace(/\s+/g, '_')}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Export all custom presets to JSON file
    function exportAllCustomPresets() {
        const customPresets = getCustomPresets();
        if (customPresets.length === 0) {
            throw new Error('No custom presets to export');
        }

        const exportData = {
            version: '1.0',
            exportedAt: new Date().toISOString(),
            presets: customPresets
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `neewer_presets_${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Import preset from JSON file
    function importPresetFromFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    
                    // Handle single preset or multiple presets
                    if (data.preset) {
                        // Single preset
                        const preset = data.preset;
                        preset.id = 'custom_' + Date.now();
                        preset.category = 'custom';
                        preset.importedAt = new Date().toISOString();
                        
                        const customPresets = getCustomPresets();
                        customPresets.push(preset);
                        saveCustomPresets(customPresets);
                        resolve([preset]);
                    } else if (data.presets && Array.isArray(data.presets)) {
                        // Multiple presets
                        const importedPresets = [];
                        const customPresets = getCustomPresets();
                        
                        data.presets.forEach((preset, idx) => {
                            preset.id = 'custom_' + Date.now() + '_' + idx;
                            preset.category = 'custom';
                            preset.importedAt = new Date().toISOString();
                            customPresets.push(preset);
                            importedPresets.push(preset);
                        });
                        
                        saveCustomPresets(customPresets);
                        resolve(importedPresets);
                    } else {
                        reject(new Error('Invalid preset file format'));
                    }
                } catch (err) {
                    reject(new Error('Failed to parse preset file: ' + err.message));
                }
            };
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsText(file);
        });
    }

    // Export current sequence to JSON file
    function exportCurrentSequence(name = 'My Sequence') {
        const steps = Sequencer.getSteps();
        if (steps.length === 0) {
            throw new Error('No steps to export');
        }

        const exportData = {
            version: '1.0',
            exportedAt: new Date().toISOString(),
            preset: {
                id: 'exported_' + Date.now(),
                name: name,
                category: 'custom',
                description: 'Exported sequence',
                author: 'User',
                tags: [],
                steps: steps.map(step => ({
                    type: step.type,
                    params: {
                        duration: step.duration,
                        speed: step.speed,
                        accel: step.accel,
                        direction: step.direction,
                        count: step.params?.count
                    }
                }))
            }
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sequence_${name.toLowerCase().replace(/\s+/g, '_')}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Get category info
    function getCategoryInfo(categoryId) {
        return categories[categoryId] || { name: categoryId, icon: 'fas fa-folder', color: '#666' };
    }

    // Get all categories
    function getCategories() {
        return categories;
    }

    // Search presets
    function searchPresets(query) {
        const results = [];
        const q = query.toLowerCase();
        const allPresets = getAllPresets();
        
        for (const category in allPresets) {
            allPresets[category].forEach(preset => {
                const matchName = preset.name.toLowerCase().includes(q);
                const matchDesc = preset.description?.toLowerCase().includes(q);
                const matchTags = preset.tags?.some(tag => tag.toLowerCase().includes(q));
                
                if (matchName || matchDesc || matchTags) {
                    results.push(preset);
                }
            });
        }
        
        return results;
    }

    // Format duration for display
    function formatDuration(ms) {
        if (ms >= 3600000) {
            const hours = Math.floor(ms / 3600000);
            const mins = Math.floor((ms % 3600000) / 60000);
            return `${hours}h ${mins}m`;
        } else if (ms >= 60000) {
            const mins = Math.floor(ms / 60000);
            const secs = Math.floor((ms % 60000) / 1000);
            return `${mins}m ${secs}s`;
        } else {
            return `${(ms / 1000).toFixed(1)}s`;
        }
    }

    // Calculate total duration of a preset
    function getPresetDuration(preset) {
        let total = 0;
        preset.steps.forEach(step => {
            if (step.params?.duration) {
                total += step.params.duration;
            }
        });
        return total;
    }

    return {
        getAllPresets,
        getPresetsByCategory,
        getPresetById,
        getCategories,
        getCategoryInfo,
        saveCurrentAsPreset,
        deleteCustomPreset,
        updateCustomPreset,
        loadPreset,
        exportPresetToFile,
        exportAllCustomPresets,
        importPresetFromFile,
        exportCurrentSequence,
        searchPresets,
        formatDuration,
        getPresetDuration,
        getCustomPresets
    };
})();

// Export
window.PresetManager = PresetManager;