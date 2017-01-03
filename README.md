# guidebook-cli

> WARNING THIS IS STILL A PROOF OF CONCEPT

A command line tool for Guidebook

## Config

### guidebook.json

This file is use with the guidebook-cli.

```
{
    guidebookConfigPath: '', // The path to the guidebook config file, json or js
    dataPath: '', // The path for the data file, json format
    createCss: 'ask', // always, ask, no
    cssExt: 'scss'
}
```

### guidebook-config.js

The configuration file for Guidebook.

### guidebook-data.json

The data of your styleguide.

```
{
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
}
```

## Commands

`gb-cli`: Display guidebook-cli list of commands

`gb-cli setup`: Setup the project to use Guidebook

`gb-cli new`: Generate a new pattern, category or page

## TODO

- [ ] Generate config file
- [ ] Check if a config file exist
- [ ] Create a new category
- [ ] Read config from external file
- [ ] Scaffold a styleguide from config
- [ ] Generate templates for pattern (md, html, css, js)
