/*
 * Adapted from
 * https://github.com/feross/snazzy/blob/master/bin/cmd.js
 *
 * Feross Aboukhadijeh - MIT LICENSE 2016
 */

var path = require('path')
var spawn = require('child_process').spawn

var snazzy = require('snazzy')()
var minimist = require('minimist')

module.exports = function(esVersion) {
  var cmd = path.join(__dirname, 'bin', esVersion + '-plain')

  var argv = minimist(process.argv.slice(2), {
    'boolean': [ 'stdin' ]
  })

  process.on('exit', (code) => {
    if(code === 0 && snazzy.exitCode !== 0) {
      process.exit(snazzy.exitCode)
    }
  })

  process.stdout.on('error', () => {})

  if(!process.stdin.isTTY || argv._[0] === '-' || argv.stdin) {
    process.stdin.pipe(snazzy).pipe(process.stdout)
  }
  else {
    var args = process.argv.slice(2)
    var standard = spawn(cmd, args)
    var standardCode

    standard.stderr.pipe(process.stderr)
    standard.stdout.pipe(snazzy).pipe(process.stdout)

    standard.on('exit', (code) => { standardCode = code })

    process.on('exit', (code) => {
      if(code === 0 && standardCode !== 0) {
        console.error('non-zero exit from the `standard` command')
        process.exit(standardCode)
      }
    })
  }
}
