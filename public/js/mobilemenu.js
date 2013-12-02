define(['jquery', 'hammer'], function ($, Hammer)
    {
        var MobileMenu = {
            initialize: function () {
                $('body').one('touchstart', function() {
                    $('.middle').hammer().on('dragup swipeup', this, function (ev) {
                        $('html').removeClass('show-top');
                    });
                    $('.middle').hammer().on('dragdown swipedown', this, function (ev) {
                        $('html').addClass('show-top');
                    });
                });
            }
        };
        return MobileMenu;
    }
);