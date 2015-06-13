module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
	clean: ['dist/<%= pkg.name %>.js'],
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
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
	htmlbuild: {
		src: 'src/index.html',
		dest: 'dist/index.html',
		options: {
			scripts: {
				main: '<%= pkg.name %>.min.js'
			}
		}
	}
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', ['jshint', 'bower_concat', 'concat', 'uglify', 'clean', 'htmlbuild']);

};