#!/usr/bin/env node

'use strict';

const program  = require('commander'),
      inquirer = require('inquirer'),
      CLI      = require('clui'),
      Spinner  = CLI.Spinner,
      chalk    = require('chalk');

console.log('Setup project');
console.log();

let projectSetup = () => {
    var questions = [
        {
            name: 'projectName',
            type: 'input',
            message: 'Your project name:',
            validate: function(value) {
                if (value.length) {
                    return true;
                } else {
                    return 'Please enter your project name';
                }
            }
        },
        {
            name: 'createConfig',
            type: 'confirm',
            message: 'Create config file?'
        },
        {
            name: 'configPath',
            type: 'input',
            message: 'The path to your config file',
            default: '/config/guidebook.js'
        },
        {
            name: 'srcDirectory',
            type: 'input',
            message: 'The source directory for the styleguide, relative to the root of your project',
            default: '/src/docs'    
        },
        {
            name: 'destDirectory',
            type: 'input',
            message: 'The destination directory for the styleguide, relative to the root of your project',
            default: '/dest/docs'    
        },
        {
            name: 'createDirectories',
            type: 'confirm',
            message: 'Create project structure?'
        },
        {
            name: 'generateCss',
            type: 'confirm',
            message: 'Generate css file for each pattern?'
        },
        {
            when: function(answers) {
                return answers.generateCss;
            },
            name: 'cssFormat',
            type: 'list',
            message: 'Choose your css format:',
            choices: [
                {
                    name: 'Standard CSS',
                    value: 'css'
                }, {
                    name: 'SASS',
                    value: 'sass'
                }, {
                    name: 'SCSS',
                    value: 'scss'
                }, {
                    name: 'Less',
                    value: 'less'
                }
            ]
        },
        {
            name: 'confirmGeneration',
            type: 'confirm',
            message: 'Confirm project creation?'
        }
    ];
    
    inquirer.prompt(questions)
        .then(function(answers) {
            if (answers.confirmGeneration) {
                console.log();
                console.log(chalk.grey('----------------------------------------------------------------'));
                console.log(chalk.green('\u2713 Styleguide setup completed'));
                console.log(chalk.grey('----------------------------------------------------------------'));
                console.log();
                console.log(chalk.yellow('Your current settings:'));
                console.log(chalk.blue('Project name:'), answers.projectName);
                console.log(chalk.blue('Config file path:'), answers.configPath);
                console.log(chalk.blue('Source directory:'), answers.srcDirectory);
                console.log(chalk.blue('Destination directory:'), answers.destDirectory);
                console.log(chalk.blue('Generate pattern CSS:'), answers.generateCss ? 'Yes' : 'No');
                if (answers.generateCss) console.log(chalk.blue('CSS Format:'), answers.cssFormat);
                console.log();
            } else {
                console.log('Ok bye.');
            }
        });
}

let createConfigFile = (data) => {
    var status = new Spinner('Creating the config file...');
    status.start();
    console.log(data.projectName);
    status.stop();
    return data;
}

let createProjectStructure = (data) => {
    var status = new Spinner('Creating the project structure...');
    status.start();
    console.log(data.createDirectories);
    status.stop();
    return data;
}

projectSetup();

// Check if config file is present
  // if config found => check if required options are there
  // if no config found => ask questions
// Ask questions about project
  // projectName
  // config file folder
  // src documentation path
  // output documentation path
// Create config file