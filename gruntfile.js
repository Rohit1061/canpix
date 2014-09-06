
module.exports = function(grunt) {
  var _ = grunt.util._;

  // initialize configuration
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      canpix: {
        options: {
          mangle: true,
          compress: true,
          preserveComments: false,
          banner: '/*! CanPix HTML5 Picture Editor - https://github.com/ichiriac/canpix */\n'
        },
        files: {
          'canpix.min.js': [
            'src/*.js',
            'src/*/*.js'
          ]
        }
      }
    }
  };

  // Setup Grunt
  grunt.initConfig(config);

  // Load NPM tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // register tasks
  grunt.registerTask('default', ['uglify']);

};