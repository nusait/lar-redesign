define(['jquery'], function ($)
    {
        var Browser = {
            mediaQuerySmallEnd: '(max-width: 640px)',
            mediaQueryMediumStart: '(min-width : 641px)',
            mediaQueryLargeStart: '(min-width : 901px)',
            onMediumLargeCallbacks: [],
            start: function () {
                var ins = this;
                console.log('loaded Browser.JS!!!');
                ins.browserViewResizeUpdate(ins.detectView());
                this.browserViewChange();
            },
            detectView: function () {
                var view;
                if (typeof window.matchMedia === 'function') {
                    if (window.matchMedia(this.mediaQueryLargeStart).matches) {
                        view = 'large';
                    } else if (window.matchMedia(this.mediaQueryMediumStart).matches) {
                        view = 'medium';
                    } else {
                        view = 'small';
                    }
                } else {
                    var $qlinks = $('.q-links'),
                        $rows = $qlinks.find('.row'),
                        $divider = $qlinks.find('.divider');
                    if ($divider.css('display') != 'none') {
                        view = 'small';
                    } else if ($rows.css('display') === 'inline') {
                        view = 'large';
                    } else {
                        view = 'medium';
                    }
                }
                return view;
            },
            onMediumLargeView: function (callback) {
                this.onMediumLargeCallbacks.push(callback);
            },
            callMediumLargeCallbacks: function () {
                this.onMediumLargeCallbacks.forEach(function (callback) {
                    callback();
                });
            },
            browserViewChange: function () {
                var ins = this;
                if (typeof window.matchMedia === 'function') {
                    window.matchMedia(this.mediaQueryLargeStart).addListener(function (mediaQueryList) {
                        if (mediaQueryList.matches) {
                            ins.browserViewResizeUpdate('large');
                        } else {
                            ins.browserViewResizeUpdate('medium');
                        }
                    });

                    window.matchMedia(this.mediaQueryMediumStart).addListener(function (mediaQueryList) {
                        if (mediaQueryList.matches) {
                            ins.browserViewResizeUpdate('medium');
                            ins.callMediumLargeCallbacks();
                        } else {
                            ins.browserViewResizeUpdate('small');
                        }
                    });
                } else {
                    $(window).resize(ins.debounce(function () {
                        ins.browserViewResizeUpdate(ins.detectView());
                    }, 100));
                }
            },
            browserViewResizeUpdate: function (viewString) {
                var ins = this,
                    view = viewString;
                if (view == 'small') {
                    $('html').addClass('view-small').removeClass('view-medium').removeClass('view-large');
                } else if (view == 'medium') {
                    $('html').addClass('view-medium').removeClass('view-small').removeClass('view-large');
                } else {
                    $('html').addClass('view-large').removeClass('view-medium').removeClass('view-small');
                }
            },
            getIEVersion: function () {
                var rv = -1; // Return value assumes failure.
                if (navigator.appName === 'Microsoft Internet Explorer')
                {
                    var ua = navigator.userAgent;
                    var re  = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
                    if (re.exec(ua) !== null) rv = parseFloat( RegExp.$1 );
                }
                return rv;
            },
            addIEVersionToHTML: function () {
                var version = this.getIEVersion();
                if (version !== -1) {
                    if (version < 9) {
                        $('html').addClass('browser-lt-ie9');
                    } else if (version === 9) {
                        $('html').addClass('browser-ie9');
                    } else {
                        console.log('browser-ie');
                        $('html').addClass('browser-ie');
                    }
                }
            },
            debounce: function(func, wait, immediate) {
                var timeout;
                var ins = this;
                return function() {
                    var context = ins, args = arguments;
                    var later = function() {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            }
        };
        return Browser;
    }
);