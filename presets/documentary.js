// Documentary presets for Neewer DL400 Studio
const documentaryPresets = [
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
            { type: 'moveRight', params: { duration: 14000 } },
            { type: 'wait', params: { duration: 3000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 14000 } },
            { type: 'wait', params: { duration: 4000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 13000 } }
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
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 10000 } },
            { type: 'wait', params: { duration: 2000 } },
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveLeft', params: { duration: 11000 } },
            { type: 'wait', params: { duration: 3000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 14000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 10000 } }
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
            { type: 'moveRight', params: { duration: 9000 } },
            { type: 'wait', params: { duration: 6000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 3000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 10000 } },
            { type: 'wait', params: { duration: 5000 } },
            { type: 'moveRight', params: { duration: 6000 } }
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
            { type: 'moveRight', params: { duration: 7000 } },
            { type: 'wait', params: { duration: 9000 } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 4000 } },
            { type: 'wait', params: { duration: 6000 } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 11000 } },
            { type: 'wait', params: { duration: 9000 } },
            { type: 'moveRight', params: { duration: 6000 } }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = documentaryPresets;
}