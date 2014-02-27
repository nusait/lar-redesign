/* global require:true */

var require = {
    urlArgs: 'bust=' + new Date().getTime(),
    paths: {
        requireLib: '../assets/requirejs/require',
        jquery:     '../assets/jquery/jquery',
        swiper:     '../assets/swiper/dist/idangerous.swiper-2.2',
        simplecors: '../assets/simplecors/simplecors',
        hammer: '../assets/hammerjs/dist/jquery.hammer.min',
        underscore: '../assets/components-underscore/underscore-min'
    },
    shim: {
        swiper: {
            'exports': 'Swiper'
        },
        hammer: {
            'exports': 'Hammer'
        },
        iscroll: {
            'exports': 'IScroll'
        },
        underscore: {
            'exports': '_'
        }
    }
};
window.require = require;