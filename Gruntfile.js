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
          cwd: 'source/less/',
          src: ['**/*.less'],
          dest: 'build/css/',
          ext: '.min.css',
          extDot: 'first'   // Extensions in filenames begin after the first dot
        }]
      }
    },
    watch: {
      styles: {
        // Which files to watch (all .less files recursively in the less directory)
        files: ['source/less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
     
  grunt.registerTask('default', ['watch']);
};