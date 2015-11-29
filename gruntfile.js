module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	bower_concat: {
	    all: {
		dest: 'src/bower.js'
	    }
	},
	jshint: {
	    files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', '!src/bower.js'],
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
	clean: {
	    build: {
		src: ['dist']
	    }
	},
	copy: {
	    main: {
	    files: [
		{expand: true, cwd: 'src', src: ['**/*.html'], dest: 'dist/'},
		{expand: true, cwd: 'src', src: ['media/**'], dest: 'dist/'}
	    ]
	    }
	},
	usemin: {
	    html: 'dist/index.html'
	}
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test', ['jshint']);
  
  grunt.registerTask('default', [
  'jshint', 
  'bower_concat',
  'clean',
  'useminPrepare', 
  'concat:generated', 
  'uglify:generated', 
  'copy', 
  'usemin'
  ]);

};
