module.exports = {
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'lonny',
                releaseRules: [
                    { type: 'docs', release: 'patch' },
                    { type: 'refactor', release: 'patch' },
                    { type: 'style', release: 'patch' },
                    { type: 'perf', release: 'patch' }
                ],
                parserOpts: {
                    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
                }
            }
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'lonny',
                writerOpts: {
                    commitsSort: ['subject', 'scope']
                }
            }
        ],
        [
            '@semantic-release/changelog',
            {
                changelogTitle: 'Sample Title'
            }
        ],
        '@semantic-release/git',
        '@semantic-release/github'
    ]
};
