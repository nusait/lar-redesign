define(['jquery', 'browser'], function ($, Browser) {
    var removeTabIndex = {
        initialize: function() {
            function removeTabIndexOnNav() {
                $('.department-header-inner .department-nav .section').removeAttr('tabindex');
            }

            function addTabIndexOnNav() {
                $('.department-header-inner .department-nav .section').attr('tabindex', '0');
            }

            Browser.onSmallView(function () {
                removeTabIndexOnNav();
            });
            Browser.onMediumLargeView(function () {
                addTabIndexOnNav();
            });

            $(document.documentElement).one('touchstart', function () {
                if (Browser.detectView() === 'small') {
                    removeTabIndexOnNav();
                }
            });
        }
    };
    return removeTabIndex;
});