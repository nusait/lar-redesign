define(['jquery'], function ($)
    {
        var Twitter = function () {
            // this.script = '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';
            // this.height = 475;
            // this.getLink = function () {
            //     return $('<a></a>')
            //         .addClass('twitter-timeline')
            //         .attr({
            //             'data-dnt' : 'true',
            //             'href' : 'https://twitter.com/StudentAffNU',
            //             'data-widget-id' : '380771956674420736',
            //             'height' : this.height
            //         })
            //         .text('Tweets by @StudentAffNU');
            // };

            this.initialize = function () {
                var ins = this;
                ins.render();
                $(window).resize(function () {
                    ins.render();
                });
                //ins.setHeight(ins.detectHeight);
                // $(window).resize(function () {
                //     var newHeight = ins.detectHeight();
                //     if (ins.height !== newHeight) {
                //         ins.setHeight(newHeight);
                //     }
                // });
            };

            this.render = function () {
                var ins = this;
                if (ins.detectView() === 'large') {
                    $('.twitter-container .inner-container .tall').addClass('hidden');
                    $('.twitter-container .inner-container .short').removeClass('hidden');
                } else {
                    $('.twitter-container .inner-container .tall').removeClass('hidden');
                    $('.twitter-container .inner-container .short').addClass('hidden');
                }
                // $('.twitter-container .inner-container').empty();
                // $('body').removeAttr('data-twttr-rendered');
                // ins.getLink().appendTo('.twitter-container .inner-container');
                // $('.twitter-container .inner-container').append(ins.script);
            };

            // this.setHeight = function (height) {
            //     this.height = height;
            //     this.render();
            // };
            this.detectView = function () {
                var $qlinks = $('.q-links'),
                    $rows = $qlinks.find('.row');

                if ($rows.css('display') === 'inline') {
                    return 'large';
                } else {
                    return 'medium';
                }
            };
            // this.detectHeight = function () {
            //     var $qlinks = $('.q-links'),
            //         $divider = $qlinks.find('.divider');
            //         $rows = $qlinks.find('.row'),
            //         $imgs = $rows.find('.link-img img');

            //     if ($rows.css('display') == 'inline') {
            //         return 475;
            //     } else {
            //         return 625;
            //     }
            // };
        };
        return Twitter;
    }
);