/*global module*/
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true,
            },
            sass: {
                files: ['app/views/**/*', 'public/js/**/*', 'public/css/**/*.scss'],
                tasks: ['sass:dev']
            },
            // phpunit: {
            //     files: ['app/**/*.php', 'app/*.php'],
            //     tasks: ['exec:phpunit'],
            //     options: {
            //         spawn: true,
            //         interrupt: true
            //     }
            // }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'public/css/department.css': 'public/css/department.scss',
                    'public/css/main.css': 'public/css/main.scss',
                    'public/css/stack.css': 'public/css/stack.scss'
                }
            }
        },
        exec: {
            phpunit: {
                command: 'phpunit',
                stdout: true,
                stderr: true
            }
        },
        replace: {
            version: {
                src: ['package.json', 'composer.json'],
                overwrite: true,
                replacements: [{
                    from: '0.0.1',
                    to: "0.0.1-dev"
                }]
            }
        },
        phpcs: {
            options: {
                standard: 'PSR1'
            },
            src: {
                dir: 'src'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-phpcs');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('test', ['watch:phpunit']);
};