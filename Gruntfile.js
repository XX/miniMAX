module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: [{
          expand: true,
          cwd: 'source/main/less/',
          src: ['**/*.less'],
          dest: 'build/main/css/',
          ext: '.min.css',
          extDot: 'first'   // Extensions in filenames begin after the first dot
        }, {
          expand: true,
          cwd: 'source/example/less/',
          src: ['**/*.less'],
          dest: 'build/example/css/',
          ext: '.min.css',
          extDot: 'first'   // Extensions in filenames begin after the first dot
        }, {
          expand: true,
          cwd: 'source/test/less/',
          src: ['**/*.less'],
          dest: 'build/test/css/',
          ext: '.min.css',
          extDot: 'first'   // Extensions in filenames begin after the first dot
        }]
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'source/',
          src: ['**/*.css', '**/*.html'],
          dest: 'build'
        }]
      }
    },
    watch: {
      styless: {
        // Which files to watch (all .less files recursively in the less directory)
        files: ['source/**/*.less'],
        tasks: ['newer:less'],
        options: {
          nospawn: true
        }
      },
      static: {
        files: ['source/**/*.css','source/**/*.html'],
        tasks: ['newer:copy'],
        options: {
          nospawn: true
        }
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  
  grunt.registerTask('build', ['copy', 'less']);
  grunt.registerTask('default', ['watch']);
};