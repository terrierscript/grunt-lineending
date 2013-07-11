/*
 * grunt-lineending
 * http://gruntjs.com/
 *
 * Licensed under the MIT license.
 */
 
'use strict';
module.exports = function(grunt) {
  var detectLineFeed = function(eol){
    switch(eol){
      case "cr":
        return '\r';
      case "crlf":
        return '\r\n';
      case "lf":
        return '\n';
    }
  }
  var lineEnding = function(filepath, linefeed){
    var file = grunt.file.read(filepath);
    
    file = file.replace(/\r\n|\n|\r/g, linefeed);
    return file;
  };
  grunt.registerMultiTask('lineending', 'convert line ending', function() {
    var options = this.options(this, {
    });
    grunt.verbose.writeflags(options, 'Options');
    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });
    
      // detect linefeed
      var linefeed  = '\n';
      if(options.eol){
        linefeed = detectLineFeed(options.eol)
      }

      // create output
      var output = [];
      src.forEach(function(_src){
        try {
          output.push(lineEnding(_src, linefeed));
        } catch (e) {
          var err = new Error('Uglification failed.');
          err.origError = e;
          grunt.fail.warn(err);
        }
      })

      // Write the destination file.
      grunt.file.write(f.dest, output.join(linefeed));
 
      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });
};
