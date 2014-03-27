/* global require:true */

var require = {
    urlArgs: 'bust=' + new Date().getTime(),
    paths: {
        requireLib: '../assets/requirejs/require',
        jquery:     '../assets/jquery/jquery',
        swiper:     '../assets/swiper/dist/idangerous.swiper-2.2',
        simplecors: '../assets/simplecors/simplecors',
        hammer: '../assets/hammerjs/dist/jquery.hammer.min',
        underscore: '../assets/components-underscore/underscore-min',
        leaflet: '../assets/leaflet-dist/leaflet'
        // async: '../assets/requirejs-plugins/src/async',
        // font: '../assets/requirejs-plugins/src/font',
        // goog: '../assets/requirejs-plugins/src/goog',
        // image: '../assets/requirejs-plugins/src/image',
        // json: '../assets/requirejs-plugins/src/json',
        // noext: '../assets/requirejs-plugins/src/noext',
        // mdown: '../assets/requirejs-plugins/src/mdown',
        // propertyParser : '../assets/requirejs-plugins/src/propertyParser',
        // markdownConverter : '../assets/requirejs-plugins/lib/Markdown.Converter'
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