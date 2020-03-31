module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['shell'],
        options: {
          spawn: false,
        },
      },
    },
    shell: {
      connect: {
        command: 'nodemon app.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.registerTask('server', ['shell:connect'])

  require('load-grunt-tasks')(grunt);

};
