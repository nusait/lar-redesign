require(['jquery', 'browser', 'dosa', 'carousel', 'iphoneViewportFixer','quicklinks', 'twitter', 'blog', 'mobilemenu', 'disallowHover','carouselImages', 'components/departmentHeader', 'components/departmentFooter'],
    function ($, Browser, Dosa, Carousel, iphoneViewportFixer, Quicklinks, Twitter, Blog, MobileMenu, DisallowHover, CarouselImages, DepartmentHeader, DepartmentFooter) {

    browser = Browser.start();

    dosa = new Dosa();
    carousel = new Carousel();
    quicklinks = new Quicklinks();
    departmentHeader = new DepartmentHeader();

    carousel.initialize();
    iphoneViewportFixer.init();
    quicklinks.initialize();
    departmentHeader.initialize();

    MobileMenu.initialize();
    DisallowHover.initialize();
    DepartmentFooter.initialize();


    console.log("main.js finished loading");
});