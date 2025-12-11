// Time-lapse presets for Neewer DL400 Studio
const timelapsePresets = [
    {
        id: 'tl_sunrise_sunset',
        name: 'Sunrise/Sunset',
        category: 'timelapse',
        description: 'Ultra-slow 2-hour slide for golden hour',
        author: 'System',
        tags: ['golden-hour', 'landscape', 'long'],
        steps: [
            { type: 'accel', params: { accel: 'constant' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 7200000 } }
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
            { type: 'moveLeft', params: { duration: 3600000 } }
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
            { type: 'moveRight', params: { duration: 14400000 } }
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
            { type: 'moveLeft', params: { duration: 10800000 } }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = timelapsePresets;
}