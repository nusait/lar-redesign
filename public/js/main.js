require(['jquery', 'browser', 'dosa', 'carousel', 'iphoneViewportFixer','quicklinks', 'twitter', 'blog', 'mobilemenu', 'disallowHover','carouselImages', 'components/departmentHeader', 'components/departmentFooter', 'components/collapsable', 'components/levelNavigation', 'components/table', 'components/machforms', 'components/basicImage', 'components/map', 'removeTabIndexOnMobileNav', 'forceDownloadLink', 'insertAudioTagsFromLinks', 'components/quickExit'],
    function ($, Browser, Dosa, Carousel, iphoneViewportFixer, Quicklinks, Twitter, Blog, MobileMenu, DisallowHover, CarouselImages, DepartmentHeader, DepartmentFooter, Collapsable, LevelNavigation, Table, Machforms, BasicImage, SaMap, RemoveTabIndex, ForceDownloadLink, InsertAudioTagsFromLinks, QuickExit) {

    $(document).ready(function () {

        browser = Browser.start();

        dosa = new Dosa();
        quicklinks = new Quicklinks();
        twitter = new Twitter();
        blog = new Blog();
        departmentHeader = new DepartmentHeader();

        iphoneViewportFixer.init();
        quicklinks.initialize();
        twitter.initialize();
        blog.initialize();
        departmentHeader.initialize();

        MobileMenu.initialize();
        DisallowHover.initialize();
        DepartmentFooter.initialize();
        Collapsable.initialize();
        LevelNavigation.initialize();
        RemoveTabIndex.initialize();
        ForceDownloadLink.initialize();
        InsertAudioTagsFromLinks.initialize();

        Machforms.makeForm();
        BasicImage.initialize();
        QuickExit.initialize();

        window.tables = [];
        $('.sa-table').each(function (index, table) {
            new Table($(table));
        });
        /** Hack for stack page **/
        (function() {
            console.log('hi just testing here');
            var ua = navigator.userAgent.toLowerCase();
            var items;
            if (ua.indexOf('safari') != -1) {
                if (ua.indexOf('chrome') <= -1) {
                    items = document.querySelectorAll('.stack-item');
                    [].forEach.call(items, function (item) {
                        item.style.overflow = "visible";
                        item.style["-webkit-filter"] = "none";
                    });
                }
            }
        })();

        /** End of hack for stack page **/

        if ($('.stamp.type-map').length == 1 ) {
            window.maps = [];
            var i = 1;

            $('.map-wrapper').each(function (index, wrapper) {
                var $wrapper = $(wrapper);
                $wrapper.find('.map-canvas').attr('id', 'map-' + i);
                $wrapper.find('.map-data').data('canvas', 'map-' + i);
                i++;
            });

            $('.map-data').each(function (index, map) {
                var $map = $(map),
                    map = new SaMap($map);
                $map.find('.marker').each(function (index, marker) {
                    var $marker = $(marker);
                    map.addMarker({point: [$marker.data('point-lat'), $marker.data('point-long')], content: $marker.html(), open: $marker.data('open')});
                });
                maps.push(map);
            });
        }

        if ($('.swiper-container').length >= 1) {
            window.carousels = [];
            $('.news-container').each(function (index, news) {
                var $news = $(news);
                var carousel = new Carousel($news);
                carousels.push(carousel);
            });
            console.log('loaded carousels');
        }

        /** Remove Nav TabIndex **/

        /** End Remove nav TabIndex **/

        console.log("main.js finished loading");
    });
});
