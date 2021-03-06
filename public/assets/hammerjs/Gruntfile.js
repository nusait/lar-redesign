// Generated by CoffeeScript 1.6.2
(function() {
  module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      meta: {
        banner: '\
/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n\
 * <%= pkg.homepage %>\n\
 *\n\
 * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> <<%= pkg.author.email %>>;\n\
 * Licensed under the <%= _.pluck(pkg.licenses, "type").join(", ") %> license */\n\n'
      },
      concat: {
        options: {
          separator: '\n\n'
        },
        dist: {
          options: {
            banner: '<%= meta.banner %>'
          },
          src: ['src/intro.js', 'src/core.js', 'src/setup.js', 'src/instance.js', 'src/event.js', 'src/pointerevent.js', 'src/utils.js', 'src/detection.js', 'src/gestures.js', 'src/outro.js'],
          dest: 'dist/hammer.js'
        },
        distjquery: {
          src: ['dist/hammer.js', 'plugins/jquery.hammer.js'],
          dest: 'dist/jquery.hammer.js'
        }
      },
      uglify: {
        options: {
          banner: '<%= meta.banner %>'
        },
        dist: {
          files: {
            'dist/hammer.min.js': ['dist/hammer.js'],
            'dist/jquery.hammer.min.js': ['dist/jquery.hammer.js']
          }
        }
      },
      jshint: {
        options: {
          curly: true,
          expr: true,
          newcap: true,
          quotmark: 'single',
          regexdash: true,
          trailing: true,
          undef: true,
          unused: true,
          maxerr: 100,
          eqnull: true,
          sub: false,
          browser: true,
          node: true
        },
        dist: {
          src: ['dist/hammer.js']
        },
        distjquery: {
          options: {
            globals: {
              Hammer: true
            }
          },
          src: ['dist/jquery.hammer.js']
        }
      },
      watch: {
        scripts: {
          files: ['src/*.js', 'plugins/*.js'],
          tasks: ['concat'],
          options: {
            interrupt: true
          }
        }
      },
      connect: {
        server: {
          options: {
            hostname: "0.0.0.0"
          }
        }
      },
      qunit: {
        all: ['tests/**/*.html']
      },
      tagrelease: {
        file: 'package.json',
        commit: true,
        message: 'Release %version%',
        prefix: 'v',
        annotate: false
      }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-tagrelease');
    grunt.registerTask('default', ['connect', 'watch']);
    grunt.registerTask('test', ['jshint', 'qunit']);
    return grunt.registerTask('build', ['concat', 'uglify', 'test']);
  };

}).call(this);
