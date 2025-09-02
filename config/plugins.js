module.exports = () => ({
    meilisearch: {
        config: {
            "activism-story": {
                indexName: "labouractivism",
                transformEntry({ entry }) {
                    const transformedEntry = entry
                    return {
                        ...transformedEntry,      
                        type: 'activismStory',
                        Tags: transformedEntry.Tags ? transformedEntry.Tags.map(tag => tag.name) : [],
                    }
                },
            }, 
            "essay": {
                indexName: "labouractivism",
                transformEntry({ entry }) {
                    const transformedEntry = entry
                    return {
                        ...transformedEntry,      
                        type: 'essay',
                        Tags: transformedEntry.Tags ? transformedEntry.Tags.map(tag => tag.name) : [],
                    }
                },
            }, 
            "network": {
                indexName: "labouractivism",
                transformEntry({ entry }) {
                    const transformedEntry = entry
                    return {
                        ...transformedEntry,      
                        type: 'network',
                        Tags: transformedEntry.Tags ? transformedEntry.Tags.map(tag => tag.name) : [],
                    }
                },
            },
            "person": {
                indexName: "labouractivism",
                transformEntry({ entry }) {
                    const transformedEntry = entry
                    return {
                        ...transformedEntry,      
                        type: 'person',
                        Tags: transformedEntry.Tags ? transformedEntry.Tags.map(tag => tag.name) : [],
                    }
                },
            },
            "source": {
                indexName: "labouractivism",
                transformEntry({ entry }) {
                    return {
                        ...entry,
                        type: 'source',
                        Tags: entry.Tags.map(tag => tag.name),
                    }
                },
            },
        }
    }
});
