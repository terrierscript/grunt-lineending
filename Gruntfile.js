/*
 * grunt-lineending
 * https://github.com/suisho/grunt-lineending
 *
 * Copyright (c) 2013 suisho
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    //   
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    },
    clean: {
      tests: ['tmp'],
    },
    // Configuration to be run (and then tested).
    lineending: {
      default_options: {
        files: {
          'tmp/default_options': ['test/fixtures/crlf'],
        },
      },
      to_lf: {
        options : {
          eol : 'lf'
        },
        files: {
          "./tmp/to_lf/cr" : ["./test/fixtures/cr"],
          "./tmp/to_lf/crlf" : ["./test/fixtures/crlf"],
          "./tmp/to_lf/lf" : ["./test/fixtures/lf"]
        }
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
      to_cr: {
        options : {
          eol : 'cr'
        },
        files: {
          "./tmp/to_cr/cr" : ["./test/fixtures/cr"],
          "./tmp/to_cr/crlf" : ["./test/fixtures/crlf"],
          "./tmp/to_cr/lf" : ["./test/fixtures/lf"]
        }
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    }
  });
  //grunt.util.linefeed = "\n";
  // Actually load this plugin's task(s).
  grunt.loadTasks('./tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'lineending', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
