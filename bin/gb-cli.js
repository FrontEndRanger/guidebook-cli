#!/usr/bin/env node

'use strict';

const pkg         = require('../package.json'),
      chalk       = require('chalk'),
      clear       = require('clear'),
      CLI         = require('clui'),
      Spinner     = CLI.Spinner,
      program     = require('commander'),
      inquirer    = require('inquirer'),
      Preferences = require('preferences'),
      touch       = require('touch'),
      fs          = require('fs-extra'),
      utils       = require('../libs/utils');
    
clear();
console.log(chalk.grey('----------------------------------------------------------------'));
console.log(chalk.blue.bold('Guidebook CLI'));
console.log(chalk.grey('----------------------------------------------------------------'));

program
    .version(pkg.version)
    .command('setup', 'Setup project')
    .command('new', 'Create a new pattern, category or page')
    .parse(process.argv);
    
    
// if (!program.args.slice(2).length) console.log(program.args);