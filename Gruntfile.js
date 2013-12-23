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
                    'public/css/main.css': 'public/css/main.scss'
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
        },
        requirejs: {
            dev: {
                options: {
                    baseUrl: 'public/js',
                    include: 'requireLib',
                    mainConfigFile: 'public/js/requireconfig.js',
                    name: 'main',
                    out: 'public/js/build.js',
                    optimize: 'none'
                }
            },
            dist: {
                options: {
                    baseUrl: 'public/js',
                    include: 'requireLib',
                    mainConfigFile: 'public/js/requireconfig.js',
                    name: 'main',
                    out: 'public/js/build-min.js',
                    optimize: 'uglify2',
                    uglify2: {
                        output: {
                            beautify: false
                        },
                        mangle: true,
                        warnings: false
                    },
                    preserveLicenseComments: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-phpcs');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('test', ['watch:phpunit']);
};