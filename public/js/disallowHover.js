define(['jquery'], function ($) {
    var DisallowHover = {
        initialize: function() {
            var $html = $(document.documentElement);
            $html.one('touchstart', function() {
                $html.removeClass('allow-hover');
            });
        }
    };
    return DisallowHover;
});