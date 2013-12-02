/* global require:true */

var require = {
    urlArgs: 'bust=' + new Date().getTime(),
    paths: {
        requireLib: '../assets/requirejs/require',
        jquery:     '../assets/jquery/jquery',
        swiper:     '../assets/swiper/dist/idangerous.swiper-2.2',
        simplecors: '../assets/simplecors/simplecors',
        hammer: '../assets/hammerjs/dist/jquery.hammer.min'
    },
    shim: {
        swiper: {
            'exports': 'Swiper'
        },
        hammer: {
            'exports': 'Hammer'
        }
    }
};
window.require = require;