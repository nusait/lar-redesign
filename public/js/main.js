require(['jquery', 'browser', 'dosa', 'carousel', 'iphoneViewportFixer','quicklinks', 'twitter', 'blog', 'mobilemenu', 'disallowHover','carouselImages', 'components/departmentHeader', 'components/departmentFooter', 'components/collapsable', 'components/levelNavigation', 'components/table', 'components/machforms', 'components/basicImage', 'components/map'],
    function ($, Browser, Dosa, Carousel, iphoneViewportFixer, Quicklinks, Twitter, Blog, MobileMenu, DisallowHover, CarouselImages, DepartmentHeader, DepartmentFooter, Collapsable, LevelNavigation, Table, Machforms, BasicImage, SaMap) {

    browser = Browser.start();

    dosa = new Dosa();
    carousel = new Carousel();
    quicklinks = new Quicklinks();
    twitter = new Twitter();
    blog = new Blog();
    departmentHeader = new DepartmentHeader();

    carousel.initialize();
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

    Machforms.makeForm();
    BasicImage.initialize();
    
    window.tables = [];
    $('.sa-table').each(function (index, table) {
        new Table($(table));
    });

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

    console.log("main.js finished loading");
});