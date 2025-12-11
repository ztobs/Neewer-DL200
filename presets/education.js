// Education presets for Neewer DL400 Studio
// Educational content needs extended reading pauses and clear progressive reveals
const educationPresets = [
    {
        id: 'edu_whiteboard',
        name: 'Whiteboard Pan',
        category: 'education',
        description: 'Smooth pan across whiteboard with extended reading pauses',
        author: 'System',
        tags: ['whiteboard', 'lecture', 'reading'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 8000 } },    // Pan to first section
            { type: 'wait', params: { duration: 10000 } },       // Extended reading time
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 10000 } },  // Pan to next section
            { type: 'wait', params: { duration: 12000 } },       // Reading pause for equations/text
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 6000 } },    // Return to key point
            { type: 'wait', params: { duration: 8000 } }         // Final comprehension pause
        ]
    },
    {
        id: 'edu_demonstration',
        name: 'Demo Sequence',
        category: 'education',
        description: 'Step-by-step demonstration with action and explanation pauses',
        author: 'System',
        tags: ['demo', 'tutorial', 'steps'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 5000 } },   // Show setup/materials
            { type: 'wait', params: { duration: 6000 } },        // Setup explanation pause
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveLeft', params: { duration: 6000 } },    // Pan to demo area
            { type: 'wait', params: { duration: 8000 } },        // Step 1 demonstration pause
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 5000 } },   // Move to next step
            { type: 'wait', params: { duration: 8000 } },        // Step 2 demonstration pause
            { type: 'moveLeft', params: { duration: 4000 } },    // Final result view
            { type: 'wait', params: { duration: 6000 } }         // Result comprehension
        ]
    },
    {
        id: 'edu_presenter',
        name: 'Presenter Focus',
        category: 'education',
        description: 'Subtle movement keeping presenter in frame with slides visible',
        author: 'System',
        tags: ['presenter', 'lecture', 'subtle'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 12000 } },  // Very subtle drift during explanation
            { type: 'wait', params: { duration: 8000 } },        // Slide reading pause
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 6000 } },    // Slight reframe
            { type: 'wait', params: { duration: 10000 } },       // Extended lecture pause
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 10000 } },  // Continue subtle drift
            { type: 'wait', params: { duration: 6000 } }         // Final explanation pause
        ]
    },
    {
        id: 'edu_lab_bench',
        name: 'Lab Bench',
        category: 'education',
        description: 'Scientific demonstration coverage across lab workspace',
        author: 'System',
        tags: ['lab', 'science', 'experiment'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 8000 } },    // Pan to equipment
            { type: 'wait', params: { duration: 7000 } },        // Equipment identification
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 10000 } },  // Follow experiment action
            { type: 'wait', params: { duration: 10000 } },       // Reaction/process observation
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 6000 } },    // Pan to results
            { type: 'wait', params: { duration: 8000 } }         // Results analysis pause
        ]
    },
    {
        id: 'edu_document_review',
        name: 'Document Review',
        category: 'education',
        description: 'Close-up reading of documents, diagrams, or charts',
        author: 'System',
        tags: ['document', 'reading', 'chart'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveRight', params: { duration: 10000 } },  // Slow scan across document
            { type: 'wait', params: { duration: 12000 } },       // Extended reading time
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveRight', params: { duration: 6000 } },   // Continue to data section
            { type: 'wait', params: { duration: 10000 } },       // Data analysis pause
            { type: 'speed', params: { speed: 1 } },
            { type: 'moveLeft', params: { duration: 8000 } },    // Return for reference
            { type: 'wait', params: { duration: 8000 } }         // Final review pause
        ]
    },
    {
        id: 'edu_coding_tutorial',
        name: 'Coding Tutorial',
        category: 'education',
        description: 'Screen/keyboard coverage for programming tutorials',
        author: 'System',
        tags: ['coding', 'programming', 'screen'],
        steps: [
            { type: 'accel', params: { accel: 'slow' } },
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 5000 } },    // Show code editor
            { type: 'wait', params: { duration: 10000 } },       // Code reading/typing pause
            { type: 'speed', params: { speed: 3 } },
            { type: 'moveRight', params: { duration: 6000 } },   // Pan to output/terminal
            { type: 'wait', params: { duration: 8000 } },        // Output observation
            { type: 'speed', params: { speed: 2 } },
            { type: 'moveLeft', params: { duration: 5000 } },    // Back to code
            { type: 'wait', params: { duration: 8000 } },        // Explanation pause
            { type: 'moveRight', params: { duration: 4000 } },   // Show result
            { type: 'wait', params: { duration: 6000 } }         // Final comprehension
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = educationPresets;
}