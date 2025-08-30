module.exports = () => ({
    meilisearch: {
        config: {
            "activism-story": {
                indexName: "labouractivism",
                transformEntry({ entry }) {
                    return {
                        ...entry,
                        type: 'activismStory'
                    }
                },
            }, 
            "essay": {
                indexName: "labouractivism",
                transformEntry({ entry }) {
                    return {
                        ...entry,
                        type: 'essay'
                    }
                },
            }, 
            "network": {
                indexName: "labouractivism",
                transformEntry({ entry }) {
                    return {
                        ...entry,
                        type: 'network'
                    }
                },
            },
            "person": {
                indexName: "labouractivism",
                transformEntry({ entry }) {
                    return {
                        ...entry,
                        type: 'person'
                    }
                },
            },
            "source": {
                indexName: "labouractivism",
                transformEntry({ entry }) {
                    return {
                        ...entry,
                        type: 'source'
                    }
                },
            },
        }
    }
});
