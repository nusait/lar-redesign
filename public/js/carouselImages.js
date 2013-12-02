define(['jquery'], function ($) {

    var CarouselImages = {
        initialize: function() {
            var $html = $(document.documentElement);
            if ($html.hasClass('view-medium') || $html.hasClass('view-large')) {
                $('.news-img').each( function() {
                    this.src = this.getAttribute('data-src');
                });
            }
        }
    };

    return CarouselImages;
});