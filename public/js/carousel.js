define(['jquery', 'swiper', 'browser'], function ($, Swiper, Browser)
    {
        var Carousel = function () {

            this.imagesLoaded = false;

            this.changeActiveLabel = function (index) {
                $('.news .news-item').removeClass('active');
                $('.news .news-item').filter(function (i) {
                    return i == index;
                }).addClass('active');
            },
            this.loadCarouselImages = function () {
                if (this.imagesLoaded) {
                    return;
                }
                var $html = $(document.documentElement);
                if ($html.hasClass('view-medium') || $html.hasClass('view-large')) {
                    $('.news-img').each( function() {
                        this.src = this.getAttribute('data-src');
                    });
                    this.imagesLoaded = true;
                }
            },
            this.startSwiper = function () {
                var ins = this,
                    startSlide = Math.floor(Math.random() * $('.news .news-item').length);
                var swiper = new Swiper('.swiper-container', {
                    'mode' : 'horizontal',
                    'loop' : 'true',
                    'pagination' : '.pagination-container',
                    'grabCursor': true,
                    'paginationClickable': true,
                    'initialSlide': startSlide,
                    'onSlideChangeEnd': function (swiper) {
                        ins.changeActiveLabel(swiper.activeLoopIndex);
                    }
                });
                $('.swiper-direction').on('click', function() {
                    if ($(this).data('direction') == 'prev') {
                        swiper.swipePrev();
                    } else {
                        swiper.swipeNext();
                    }
                });
                ins.changeActiveLabel(swiper.activeLoopIndex);
            },
            this.addMediaQueryEvents = function () {
                var ins = this;
                Browser.onMediumLargeView(function () {
                    ins.loadCarouselImages();
                });
            },
            this.initialize = function () {
                this.startSwiper();
                this.loadCarouselImages();
                this.addMediaQueryEvents();
            };
        };
        return Carousel;
    }
);