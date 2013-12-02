/*global define:false, console:false, alert:false  */

// author: Christopher E. Walker
// fix iphone 5+ standalone not filling entire viewport:

define([], function() {

    'use strict';
    var Fixer = {
        init: function() {

            if ( ! ('standalone' in window.navigator) ) return;

            var
                d = document,
                meta = d.querySelector('meta[name=viewport]');

            function replaceWith(width, height) {
                meta.setAttribute('content',
                    meta.getAttribute('content')
                        .replace(  /width=\S*/,  'width=' + width  + ',' )
                        .replace( /height=\S*/, 'height=' + height + ',' )
                );
            }

            function replaceAbsolute() {
                replaceWith(window.innerWidth + 0.1, window.innerHeight + 0.1);
            }

            replaceAbsolute();

            d.addEventListener('orientationchange', function() {
                replaceWith('device-width', 'device-height');
                setTimeout(replaceAbsolute, 200);
            });
        }
    };

    return Fixer;
});