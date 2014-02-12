require(['jquery', 'browser', 'dosa', 'carousel', 'iphoneViewportFixer','quicklinks', 'twitter', 'blog', 'mobilemenu', 'disallowHover','carouselImages', 'components/departmentHeader', 'components/departmentFooter', 'components/collapsable', 'components/levelNavigation', 'components/table', 'components/machforms', 'components/basicImage'],
    function ($, Browser, Dosa, Carousel, iphoneViewportFixer, Quicklinks, Twitter, Blog, MobileMenu, DisallowHover, CarouselImages, DepartmentHeader, DepartmentFooter, Collapsable, LevelNavigation, Table, Machforms, BasicImage) {

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

    console.log("main.js finished loading");
});