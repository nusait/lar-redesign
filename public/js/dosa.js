define(['jquery', 'hammer', 'browser'], function ($, Hammer, Browser)
    {
        var Dosa = function () {
            this.initialize = function () {
                this.hideAll();
                this.dropdown();
                this.drawer();
            };
            this.hideAll = function () {
                $(".dosa .section, .dosa-banner .section").addClass("closed");
                console.log('loaded dosa hideall');
            };
            this.drawer = function () {
                // console.log($('.middle').hammer());
                $('body').one('touchstart', function () {
                    $('.viewport').hammer().on("swipeleft dragleft", this, function (ev) {
                        $('html').removeClass('show-drawer');
                        ev.gesture.stopPropagation;
                    });
                });

                $('.middle-overlay').on('click', this, function (ev) {
                    $('html').removeClass('show-drawer');
                    ev.preventDefault();
                });

                Browser.onMediumLargeView(function () {
                    $('html').removeClass('show-drawer');
                });
            };
            this.dropdown = function () {
                var ins = this;
                $(".dosa h2").on("click", function () {
                    $(this).parent().toggleClass('closed');
                });
                $(".dosa-banner .section").hover(function () {
                    $(this).removeClass('closed');
                }, function () {
                    $(this).addClass('closed');
                });

                $(".dosa-banner .section h2").focus(function () {
                    target = $(this).parent();
                    ins.hideAll();
                    target.removeClass('closed');
                });
            };

            this.initialize();
        };
        return Dosa;
    }
);