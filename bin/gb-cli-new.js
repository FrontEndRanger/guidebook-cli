#!/usr/bin/env node

'use strict';

const program = require('commander'),
    inquirer  = require('inquirer'),
    chalk     = require('chalk'),
    CLI       = require('clui'),
    Spinner   = CLI.Spinner,
    _         = require('lodash'),
    utils     = require('../libs/utils');

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
    var questions = [{
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

    inquirer.prompt(questions).then(function(answers) {
        createPattern(answers.type);
    });
}

function createPattern(type) {
    var questions = [{
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
        .then(function(answers) {
            if (utils.createPattern(answers.name, answers.category, answers.css)) {
                utils.saveData(function() {
                    console.log(chalk.grey('----------------------------------------------------------------'));
                    console.log(chalk.green('\u2713 Your pattern has been created!'));
                    console.log(chalk.grey('----------------------------------------------------------------'));
                })
            };
        });
}