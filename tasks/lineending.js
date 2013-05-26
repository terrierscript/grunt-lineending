/*
 * grunt-lineending
 * http://gruntjs.com/
 *
 * Licensed under the MIT license.
 */
 
'use strict';
module.exports = function(grunt) {
  var lineEnding = function(filepath, options){
    var file = grunt.file.read(filepath);
    var linefeed  = '\n';
    switch(options.eol){
      case "cr":
        linefeed = '\r';
        break;
      case "crlf":
        linefeed = '\r\n';
        break;
      case "lf":
        linefeed= '\n';
        break;
    }
    
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
      
      var output;
      try {
        
        output = lineEnding(src, options);
      } catch (e) {
        var err = new Error('Uglification failed.');
        err.origError = e;
        grunt.fail.warn(err);
      }
      // Write the destination file.
      grunt.file.write(f.dest, output);
 
      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });
};
