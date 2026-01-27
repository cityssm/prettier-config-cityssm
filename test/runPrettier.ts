/* eslint-disable no-console -- Test code output. */

import { exec } from 'node:child_process'

const prettierCommand =
  'prettier ./test/unpretty.ts --check --config prettier.config.js'

console.log(`Running ${prettierCommand} ...`)

try {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, sonarjs/os-command, sonarjs/no-os-command-from-path
  exec(prettierCommand, (error, stdout, stderr) => {
    /*
     * Print output
     */

    if (stdout !== '') {
      console.log('\nSTDOUT')
      console.log(stdout)
    }

    if (stderr !== '') {
      console.log('\nSTDERR')
      console.log(stderr)
    }

    /*
     * Check if processed correctly
     */

    if (error === null) {
      console.log('❗  Prettier did not find any errors or warnings.')
      process.exitCode = 1
    } else if (error.code === 2) {
      console.log('❗  Broken configuration.')
      process.exitCode = 1
    } else {
      console.log(
        '✔️  Prettier errors and warnings found. Config checked successfully.'
      )
      process.exitCode = 0
    }
  })
} catch {
  console.log('❗ Error running Prettier.')
  process.exitCode = 1
}
