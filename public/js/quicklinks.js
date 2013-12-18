define(['jquery', 'browser'], function ($, Browser)
    {
        var Quicklinks = function () {
            this.updateRowHeight = function () {
                if ( ! this.existsOnPage) {
                    return;
                }
                var $qlinks = $('.q-links-region'),
                    $biglist = $qlinks.siblings('.big-list-region').children('.big-list'),
                    $rich = $qlinks.siblings('.rich-extra-region').children('.rich-extra'),
                    $divider = $qlinks.find('.divider'),
                    $rows = $qlinks.find('.row'),
                    $imgs = $rows.find('.link-img img');

                if (Browser.detectView() != 'medium') {
                    $rows.removeAttr('style');
                    $imgs.removeAttr('style');
                    return;
                }
                var totalHeight = $biglist.height() - $rich.height() - 40;
                // console.log($biglist.height() + ', ' + $rich.height());
                $qlinks.find('.row').height(totalHeight / 2);
                if ($rows.find('.link-img').height() > $rows.find('.link-img').width()) {
                    $imgs.css({
                        width: 'auto',
                        height: '100%'
                    });
                } else {
                    $imgs.css({
                        width: '100%',
                        height: 'auto'
                    });
                }
            };
            this.initialize = function () {
                this.existsOnPage = this.detectQuicklinks();

                $(window).resize($.proxy(function () {
                    this.updateRowHeight();
                }, this));

                this.updateRowHeight();

                console.log('qlinks loaded');
            };

            this.detectQuicklinks = function () {
                if ($('.q-links-region .link-img').length > 0) {
                    return true;
                }
                return false;
            }
        };
        return Quicklinks;
    }
);