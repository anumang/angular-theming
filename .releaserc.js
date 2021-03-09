module.exports = {
  branches: ['master'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        // https://github.com/semantic-release/commit-analyzer#releaserules
        releaseRules: [
          {
            scope:
              'no-release',
            release: false,
          },
          {
            breaking: true,
            release: 'major',
          },
          {
            type: 'feat',
            release: 'minor',
          },
          {
            type: 'refactor',
            scope: 'core-*',
            release: 'minor',
          },
          {
            type: '*',
            release: 'patch',
          },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      { preset: 'angular' },
    ],
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: [
          'CHANGELOG.md',
          'package.json',
          '.releaserc.js',
        ],
      },
    ],
    '@semantic-release/github',
  ],
};
