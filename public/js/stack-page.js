require(['jquery', 'browser', 'carousel', 'iphoneViewportFixer', 'mobilemenu', 'disallowHover', 'components/departmentHeader', 'components/departmentFooter'],
    function ($, Browser, Carousel, iphoneViewportFixer, MobileMenu, DisallowHover,  DepartmentHeader, DepartmentFooter) {

    browser = Browser.start();

    dosa = new Dosa();
    departmentHeader = new DepartmentHeader();

    iphoneViewportFixer.init();
    departmentHeader.initialize();

    MobileMenu.initialize();
    DisallowHover.initialize();
    DepartmentFooter.initialize();


    console.log("main.js finished loading");
});