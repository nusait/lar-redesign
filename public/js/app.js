console.log('app.js starting');

document.querySelector('.menu-drawer').addEventListener('click', function () {
    document.documentElement.classList.toggle('show-drawer');
});

function fixHeaderWhenNoCSSCalc() {
    if ( ! window.getMatchedCSSRules) return;

    var
        d = document,
        logo = d.querySelector('.logo');
    if (window.getMatchedCSSRules(logo) === null) {
        cssText = null;
    } else {
        cssText = window.getMatchedCSSRules(logo)[0].cssText;
    }
    noSupportCalc = /margin-left: auto/.test(cssText);

    if ( noSupportCalc ) {
        var
            logoContainer = d.querySelector('.logo-container'),
            buttonContainer = d.querySelector('.button-container'),
            marginLeft =
                (logoContainer.offsetWidth / 2) -
                (buttonContainer.offsetWidth / 2) -
                (logo.offsetWidth / 2);

        console.log(logoContainer.offsetWidth);
        console.log(buttonContainer.offsetWidth);
        console.log(logo.offsetWidth);
        console.log(marginLeft);

        logo.style.marginLeft = marginLeft + 'px';
    }
}

function fixImageNotShowingOnSafariOnStackPage() {
    console.log('hi just testing here');
    var ua = navigator.userAgent.toLowerCase();
    var items;
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') <= -1) {
            items = document.querySelectorAll('.stack-item');
            [].forEach.call(items, function (item) {
                item.style.overflow = "visible";
            });
        }
    }
}

fixHeaderWhenNoCSSCalc();
fixImageNotShowingOnSafariOnStackPage();
window.addEventListener('resize', fixHeaderWhenNoCSSCalc);