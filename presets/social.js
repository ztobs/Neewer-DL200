// Social Media presets for Neewer DL400 Studio
const socialPresets = [
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
            { type: 'moveRight', params: { duration: 4400 } },
            { type: 'wait', params: { duration: 1000 } },
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveLeft', params: { duration: 3600 } },
            { type: 'wait', params: { duration: 1200 } },
            { type: 'speed', params: { speed: 4 } },
            { type: 'moveRight', params: { duration: 4000 } },
            { type: 'wait', params: { duration: 800 } },
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveLeft', params: { duration: 2000 } }
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
            { type: 'moveLeft', params: { duration: 7000 } },
            { type: 'wait', params: { duration: 2000 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 6600 } },
            { type: 'wait', params: { duration: 1600 } },
            { type: 'speed', params: { speed: 4 } },
            { type: 'moveLeft', params: { duration: 6400 } },
            { type: 'wait', params: { duration: 2000 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 3000 } }
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
            { type: 'moveRight', params: { duration: 3600 } },
            { type: 'speed', params: { speed: 4 } },
            { type: 'moveLeft', params: { duration: 2200 } },
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveRight', params: { duration: 3600 } },
            { type: 'speed', params: { speed: 4 } },
            { type: 'moveLeft', params: { duration: 2800 } },
            { type: 'speed', params: { speed: 5 } },
            { type: 'moveRight', params: { duration: 3400 } }
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
            { type: 'moveLeft', params: { duration: 3000 } },
            { type: 'wait', params: { duration: 2000 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveLeft', params: { duration: 4400 } },
            { type: 'wait', params: { duration: 3000 } },
            { type: 'speed', params: { speed: 4 } },
            { type: 'moveLeft', params: { duration: 3600 } },
            { type: 'wait', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 8400 } }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = socialPresets;
}