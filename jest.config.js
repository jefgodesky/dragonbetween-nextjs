const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom'
}

const esmodules = ['unified', 'rehype-.*', 'remark-.*', 'unist-.*', 'mdast-.*', 'hast.*', 'markdown-.*',
  'character-entities-.*', 'vfile.*?', 'micromark.*?', 'bail', 'zwitch', 'ccount', 'is-plain-obj', 'trough',
  'trim-lines', 'html-void-elements', 'github-slugger', 'stringify-entities', 'property-information',
  'web-namespaces', 'escape-string-regexp', '.*-separated-tokens', 'decode-named-character-reference']

module.exports = async () => ({
  ...await createJestConfig(customJestConfig)(),
  transformIgnorePatterns: [
    `node_modules/(?!(${esmodules.join('|')})/)`,
    '^.+\\.module\\.(css|sass|scss)$'
  ]
})
