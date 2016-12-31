const fs    = require('fs-extra'),
    chalk   = require('chalk'),
    glob    = require('glob'),
    CLI     = require('clui'),
    Spinner = CLI.Spinner;
    
const guidebookConfig = require('../test/guidebook-config'),
    guidebookCliConfig = require('../test/guidebook-cli-config');

module.exports = {
    $root: process.cwd(),
    // $config: null,
    $config: {
        guidebook: guidebookConfig,
        cli: guidebookCliConfig
    },
    // $data: null,
    $data: {
        content: {
            overview: {
                pattern: 'overview/*.md'
            }
        },
        categories: {
            components: {
                pattern: 'components/*.md',
                pages: [{
                    name: 'buttons'
                }]
            },
            modules: {
                pattern: 'modules/*.md',
                pages: [{
                    name: 'chatBox'
                }]
            }
        }
    },

    init: function() {
        // check if config file is present
        // if not, use default
        self = this;
        // console.log(self.$config);
    },
    setup: () => {
        // Create a new guidebook project
        // Create the data file
        // Create the config file
        // Create the cli config file
    },
    checkConfig: () => {
        // Check if config file exist
    },
    getConfig: () => {
        // Get configuration data from config file
        // TODO: Find a way to get config from a JS or a JSON file
    },
    saveConfig: () => {
        // Create a new config file
    },
    outputConfig: () => {
        // Output current configuration
    },
    getData: () => {
        // Get the data from the data file
    },
    saveData: function(callback) {
        // Update data in data file
        return callback();
    },
    createPattern: function(name, category, createCss) {
        // Create a new pattern in a category
        var self = this,
            error = false;
        
        name = name.toLowerCase();
        category = category.toLowerCase();
        
        var patternPath = self.$config.guidebook.paths.src.patterns,
            cssExt = self.$config.cli.cssExt ? self.$config.cli.cssExt : 'css';
        
        var pageFile = `${patternPath}/${category}/${name}/${name}.md`,
            baseFile = `${patternPath}/${category}/${name}/${name}-base.html`,
            cssFile = `${patternPath}/${category}/${name}/${name}.${cssExt}`;

        // TODO: find a way to template the file content
        // TODO: Find a better way to name base and variants
        // TODO: Check if the pattern already exists, maybe in gb-cli-new
        
        fs.outputFile(pageFile, 'Your code here', (err) => {
            if (err) {
                error = true;
                throw err;
            };
        });
        
        fs.outputFile(baseFile, '<div></div>', (err) => {
            if (err) {
                error = true;
                throw err;
            };
        });
        
        if (createCss) {
            fs.outputFile(cssFile, '/* CSS File */', (err) => {
                if (err) {
                    error = true;
                    throw err;
                };
            });
        }
        
        return ! error;    
    },
    removePattern: (name) => {
        // Remove an existing pattern from disk
        // Remove the pattern from the data file
        // Ouput message if pattern doesn't exist
    },
    createCategory: (name) => {
        // Create a new category
        // Save it to data file
    },
    removeCategory: () => {
        // Remove an existing category
        // Ouput message if category doesn't exist
    },
    generateStyleguideFiles: () => {
        // Generate styleguide files
        // Be sure not to overwrite existing files
    }
};