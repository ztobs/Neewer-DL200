// Documentary presets for Neewer DL400 Studio
// Documentary requires slow, deliberate movements with ample dwell time for audience contemplation
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
            { type: 'moveRight', params: { duration: 18000 } },  // Very long establishing pan
            { type: 'wait', params: { duration: 4000 } },        // Pause for audience to absorb
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 16000 } },  // Continued smooth coverage
            { type: 'wait', params: { duration: 5000 } },        // Extended contemplation pause
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 14000 } }   // Final slow sweep
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
            { type: 'moveLeft', params: { duration: 12000 } },   // Initial tracking
            { type: 'wait', params: { duration: 3000 } },        // Subject anticipation pause
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveLeft', params: { duration: 14000 } },   // Following movement
            { type: 'wait', params: { duration: 4000 } },        // Extended dwell for subject focus
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 16000 } },   // Final smooth follow
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 10000 } }    // Graceful slow end
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
            { type: 'moveRight', params: { duration: 10000 } },  // Slow detail reveal
            { type: 'wait', params: { duration: 8000 } },        // Long pause for detail examination
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 4000 } },   // Brief continued reveal
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 12000 } },   // Return pass for re-examination
            { type: 'wait', params: { duration: 6000 } },        // Final contemplation
            { type: 'moveRight', params: { duration: 8000 } }    // Closing reveal
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
            { type: 'moveRight', params: { duration: 8000 } },   // Initial evidence scan
            { type: 'wait', params: { duration: 12000 } },       // Long pause for reading/examination
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 5000 } },   // Move to next evidence
            { type: 'wait', params: { duration: 10000 } },       // Extended examination time
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 12000 } },  // Careful methodical pan
            { type: 'wait', params: { duration: 12000 } },       // Final evidence dwell
            { type: 'moveRight', params: { duration: 6000 } }    // Closing
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = documentaryPresets;
}