# grunt-lineending [![Build Status](https://travis-ci.org/suisho/grunt-lineending.png?branch=master)](https://travis-ci.org/suisho/grunt-lineending)

> Convert line ending like `dos2unix` ( or `unix2dos`) command on Grunt.


## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-lineending --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-lineending');
```

*This plugin was designed to work with Grunt 0.4.x.*


## Lineending task
_Run this task with the `grunt lineending` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Overview
In your project's Gruntfile, add a section named `lineending` to the data object passed into `grunt.initConfig()`.

### Options

#### eol
Type: `String`  
Choices: `'lf'`, `'cr'`, `'crlf'`  
Default: `'lf'`  

### Usage Examples

#### Example Config

```javascript
grunt.initConfig({
  lineending: {               // Task
    dist: {                   // Target
      options: {              // Target options
        eol: 'crlf'
      },
      files: {                // Files to process
        '/path/to/target': ['test/fixtures/file']
      }
    }
  }
});

grunt.loadNpmTasks('grunt-lineending');

grunt.registerTask('default', ['lineending']);
```

#### Default Options
By default convert line ending to <b>lf(\n)</b>.

```js
grunt.initConfig({
  lineending: {
    your_target: {
      '/path/to/output': ['/path/to/target']
    },
  }
});
```

#### Convert files manually
```js
grunt.initConfig({
  lineending: {
    dist: {
      options: {
        eol: 'crlf'
      },
      files: {
        "./tmp/to_crlf/cr": ["./test/fixtures/cr"],
        "./tmp/to_crlf/crlf": ["./test/fixtures/crlf"],
        "./tmp/to_crlf/lf": ["./test/fixtures/lf"]
      }
    }
  }
});
```

#### Convert all files
```js
grunt.initConfig({
  lineending: {
    dist: {
      options: {
        eol: 'crlf'
      },
      files: [{
        expand: true,
        cwd: './',
        src: ['test/fixtures/*'],
        dest: 'tmp/to_crlf/'
      }]
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
 * 2013-05-26 v0.1.1 Remove console.log
 * 2013-03-16 v0.1.0 Initial release.
