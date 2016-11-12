var eslint = require('eslint')
var engine = require('standard-engine')
var pkg = require('./package.json')
var config = require('./config')

function run(esVersion) {
  var base = config.base
  var extension = config[esVersion]

  var eslintConfig = {
    parserOptions: Object.assign({}, base.parserOptions, extension.parserOptions),
    rules: Object.assign({}, base.rules, extension.rules)
  }

  var opts = {
    cmd: 'lint-' + esVersion,
    eslint: eslint,
    eslintConfig: eslintConfig,
    version: pkg.version,
    tagline: `@etpinard\'s personal linter for ${esVersion}`,
    homepage: ''
  }

  engine.cli(opts)
}

module.exports = run
