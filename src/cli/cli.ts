#!/usr/bin/env node
import program from 'commander'
import {exec} from 'child_process'



let logInfo = (argument: any) => {
  console.log(argument);
}

  program
    .version('0.0.1')
    .command(' [directory]')
    .description('List files and folders')
    .option('-h', '--help', 'Display the help instructions')
    .option('-v', '--version', 'Displays the version of the package the user is running')
    .option('--no-lockfile', 'Prevents creation and or reading of a lockfile')
    .option('--cache-folder <folder>', 'caches the specified folder')
    .option('-f', '--f', )

  program.parse(process.argv)
  if (program.args.length === 0) program.help()
  export = program
