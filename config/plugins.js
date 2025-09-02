module.exports = () => ({
    meilisearch: {
        config: {
            "activism-story": {
                indexName: "labouractivism",
                transformEntry({ entry }) {
                    const transformedEntry = entry
                    delete transformedEntry.Essyas
                    delete transformedEntry.Networks
                    delete transformedEntry.People
                    return {
                        ...transformedEntry,      
                        type: 'activismStory',
                        Tags: transformedEntry.Tags.map(tag => tag.name),
                    }
                },
            }, 
            "essay": {
                indexName: "labouractivism",
                transformEntry({ entry }) {
                    const transformedEntry = entry
                    delete transformedEntry.ActivismStories
                    delete transformedEntry.Networks
                    delete transformedEntry.People
                    return {
                        ...transformedEntry,      
                        type: 'essay',
                        Tags: transformedEntry.Tags.map(tag => tag.name),
                    }
                },
            }, 
            "network": {
                indexName: "labouractivism",
                transformEntry({ entry }) {
                    const transformedEntry = entry
                    delete transformedEntry.ActivismStories
                    delete transformedEntry.Essyas
                    delete transformedEntry.People
                    return {
                        ...transformedEntry,      
                        type: 'network',
                        Tags: transformedEntry.Tags.map(tag => tag.name),
                    }
                },
            },
            "person": {
                indexName: "labouractivism",
                transformEntry({ entry }) {
                    const transformedEntry = entry
                    // delete transformedEntry.ActivismStories
                    // delete transformedEntry.Essyas
                    // delete transformedEntry.Networks
                    return {
                        ...transformedEntry,      
                        type: 'person',
                        Tags: transformedEntry.Tags.map(tag => tag.name),
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
