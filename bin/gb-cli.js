#!/usr/bin/env node

import pkg from '../package.json';
import chalk from 'chalk';
import clear from 'clear';
import CLI from 'clui';
import program from 'commander';
import inquirer from 'inquirer';
import Preferences from 'preferences';
import touch from 'touch';
import fs from 'fs-extra';
import utils from '../libs/utils';

const Spinner = CLI.Spinner;

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
