'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.test = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options');
    var expected = grunt.file.read('test/expected/lf');
    test.equal(actual, expected, 'default is lf');

    test.done();
  },
  to_cr: function(test) {
    test.expect(3);
    var expected = grunt.file.read('test/expected/cr');
    var dir = "tmp/to_cr";
    test.equal(grunt.file.read(dir+'/cr'), expected, 'cr -> cr');
    test.equal(grunt.file.read(dir+'/lf'), expected, 'lf -> cr');
    test.equal(grunt.file.read(dir+'/crlf'), expected, 'crlf -> cr');
    test.done();
  },
  to_lf: function(test) {
    test.expect(3);
    var expected = grunt.file.read('test/expected/lf');
    var dir = "tmp/to_lf";
    test.equal(grunt.file.read(dir+'/cr'), expected, 'cr -> lf');
    test.equal(grunt.file.read(dir+'/lf'), expected, 'lf -> lf');
    test.equal(grunt.file.read(dir+'/crlf'), expected, 'crlf -> lf');
    test.done();
  },
  to_crlf: function(test) {
    test.expect(3);
    var expected = grunt.file.read('test/expected/crlf');
    var dir = "tmp/to_crlf";
    test.equal(grunt.file.read(dir+'/cr'), expected, 'cr -> crlf');
    test.equal(grunt.file.read(dir+'/lf'), expected, 'lf -> crlf');
    test.equal(grunt.file.read(dir+'/crlf'), expected, 'crlf -> crlf');
    test.done();
  },
};
