define(['jquery', 'hammer', 'browser', 'underscore'], function ($, Hammer, Browser, _)
    {
        var MobileMenu = {
            initialize: function () {
                var ins = this;
                $('.menu-drawer').on('click', function () {
                    $('html').toggleClass('show-drawer');
                });

                $('body').one('touchstart', function() {
                    // $('.middle').hammer().on('dragup swipeup', this, function (ev) {
                    //     $('html').removeClass('show-top');
                    // });
                    // $('.middle').hammer().on('dragdown swipedown', this, function (ev) {
                    //     $('html').addClass('show-top');
                    // });
                    // $('.main').on('scroll', function () {
                    //     console.log('scroll!!!');
                    //     ins.scrollEnd();
                    // });
                    // $('.main').on('scroll', function () {
                    //     console.log('scrolling!!');
                    //     Browser.debounce(function () {
                    //         console.log('debouncing');
                    //         $('html').removeClass('show-top');
                    //     }, 100, true);

                    //     // Browser.debounce(function () {
                    //     //     $('html').addClass('show-top');
                    //     // }, 100);
                    // });
                });
            },
            scrollEnd: function () {
                return _.debounce(function () {
                    console.log('scroll done!');
                }, 500);
            }
        };
        return MobileMenu;
    }
);