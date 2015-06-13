module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	bower_concat: {
		all: {
			dest: 'src/js/bower.js'
		}
	},
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', '!src/js/bower.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
	useminPrepare: {
		html: 'src/index.html',
		options: {
			root: 'src',
			dest: 'dist'
		}
	},
	copy: {
		main: {
			src: 'src/index.html',
			dest: 'dist/index.html'
		}
	},
	usemin: {
		html: 'dist/index.html'
	}
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', ['jshint', 'bower_concat', 'useminPrepare', 'concat:generated', 'uglify:generated', 'copy', 'usemin']);

};