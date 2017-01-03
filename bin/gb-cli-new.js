#!/usr/bin/env node

import program from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import CLI from 'clui';
import _ from 'lodash';
import utils from '../libs/utils';

const Spinner = CLI.Spinner;

utils.init();

program
    .description(chalk.yellow('Create a new pattern library component.'));

process.argv[1] = 'gb-cli new';

program.parse(process.argv);

let input = program.args[0],
    patternTypeEnum = ['pattern', 'category', 'page'];

if (input) {
    if (_.includes(patternTypeEnum, input)) {
        createPattern(input);
    } else {
        console.log(chalk.red('Not a valid pattern type'));
    }
} else {
    let questions = [{
        type: 'list',
        name: 'type',
        message: 'What do you want to create?',
        choices: [
            'Pattern',
            'Category',
            'Page'
        ],
        filter: function(val) {
            return val.toLowerCase();
        }
    }];

    inquirer.prompt(questions).then(answers => {
        createPattern(answers.type);
    });
}

function createPattern(type) {
    let questions = [{
        type: 'input',
        name: 'name',
        message: 'Name of the pattern'
    }, {
        type: 'list',
        name: 'category',
        message: 'Choose a pattern category',
        choices: ['Components', 'Modules']
    },
    {
        type: 'confirm',
        name: 'css',
        message: 'Create css file?'
    }];

    inquirer.prompt(questions)
        .then(answers => {
            if (utils.createPattern(answers.name, answers.category, answers.css)) {
                utils.saveData(() => {
                    console.log(chalk.grey('----------------------------------------------------------------'));
                    console.log(chalk.green('\u2713 Your pattern has been created!'));
                    console.log(chalk.grey('----------------------------------------------------------------'));
                })
            };
        });
}
