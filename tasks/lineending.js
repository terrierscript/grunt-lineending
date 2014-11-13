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
      default:
        return grunt.util.linefeed;
    }
  };
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

      // src and dest are the same file (defaults to false)
      var overwrite = options.overwrite || false;

      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else if (!grunt.file.isFile(filepath)) {
          grunt.verbose.writeln('Skipping "' + filepath + '" not a file.');
          return false;
        } else {
          return true;
        }
      });
      if (src.length === 0) {
        return;
      }
    
      // detect linefeed
      var linefeed  = detectLineFeed(options.eol);

      // create output
      var output = [];
      src.forEach(function(_src){
        try {
          var normalized = lineEnding(_src, linefeed);
          output.push(normalized);
          if (overwrite) {
            // ignore files if input/output is the same
            var original = grunt.file.read(_src);
            if (original != normalized) {
              // Write the destination file.
              grunt.file.write(_src, normalized);
         
              // Print a success message.
              grunt.log.writeln('File "' + _src + '" updated.');
            }
          }
        } catch (e) {
          var err = new Error('Linefeed convert failed.');
          err.origError = e;
          grunt.fail.warn(err);
        }
      });

      if (!overwrite) {
        // Write the destination file.
        grunt.file.write(f.dest, output.join(linefeed));
   
        // Print a success message.
        grunt.log.writeln('File "' + f.dest + '" created.');
      }

    });
  });
};
