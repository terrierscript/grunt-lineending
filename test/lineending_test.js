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
    grunt.util.linefeed = '\n';
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
  multi: function(test) {
    test.expect(2);
    var expected = grunt.file.read('test/expected/multi/foo');
    var dir = "tmp/multi/test/fixtures";
    test.equal(grunt.file.read(dir+'/multi/foo'), expected, 'multi : foo');
    test.equal(grunt.file.read(dir+'/multi/baz'), expected, 'multi : baz');
    test.done();
  },
  multi_cat: function(test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/multi_cat');
    test.equal(grunt.file.read('tmp/multi_cat'), expected, 'multi cat');
    test.done();
  },
  nested: function (test) {
    test.expect(3);
    test.equal(
      grunt.file.read('tmp/nested/one'),
      grunt.file.read('test/expected/nested/one'),
      'base file'
    );
    test.equal(
      grunt.file.read('tmp/nested/level1/nest_one'),
      grunt.file.read('test/expected/nested/level1/nest_one'),
      'nest level one'
    );
    test.equal(
      grunt.file.read('tmp/nested/level1/level2/nest_two'),
      grunt.file.read('test/expected/nested/level1/level2/nest_two'),
      'nest level two'
    );
    test.done();
  }
};
