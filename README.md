# grunt-lineending [![Build Status](https://travis-ci.org/psyrendust/grunt-lineending.png?branch=master)](https://travis-ci.org/psyrendust/grunt-lineending)

> Convert line ending like `dos2unix` ( or `unix2dos`) command on Grunt.


## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-lineending --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-lineending');
```

## The "lineending" task

### Overview
In your project's Gruntfile, add a section named `lineending` to the data object passed into `grunt.initConfig()`.

By default covnert line ending to <b>lf(\n)</b>.

```js
grunt.initConfig({
  lineending: {
    your_target: {
      '/path/to/target' : ['/path/to/target']
    },
  },
})
```

#### options.eol
Type: `String`
Default value: `lf`

Choose `lf`, `cr` or `crlf`

### Usage Examples

```js
 lineending: {
  default_options: { // convert to lf
    files: {
      'tmp/file': ['test/fixtures/file'],
    },
  },
  to_crlf: {
    options : {
      eol : 'crlf'
    },
    files: {
      "./tmp/to_crlf/cr" : ["./test/fixtures/cr"],
      "./tmp/to_crlf/crlf" : ["./test/fixtures/crlf"],
      "./tmp/to_crlf/lf" : ["./test/fixtures/lf"]
    }
  },
```

If you want convert all files.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
 * 2013-05-22   v0.1.1   Removed console.log statement in lineEnding function to clean up output. Changed double quotes to single quotes for consistency. Added Travis-CI. Updated README.md.
 * 2013-03-16   v0.1.0   Initial release.
