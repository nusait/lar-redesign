define(['jquery', 'swiper', 'browser'], function ($, Swiper, Browser)
    {
        var Carousel = function ($el) {

            this.imagesLoaded = false;
            this.el = $el;
            this.initialize(this.el);
        };

        Carousel.prototype.swiper = null; //sets a default for swiper object (instead of undefined)

        Carousel.prototype.changeActiveLabel = function (index) {
            this.el.find('.news .news-item').removeClass('active');
            this.el.find('.news .news-item').filter(function (i) {
                return i == index;
            }).addClass('active');
        };

        Carousel.prototype.loadCarouselImages = function () {
            if (this.imagesLoaded) {
                return;
            }
            var $html = $(document.documentElement);
            if ($html.hasClass('view-medium') || $html.hasClass('view-large')) {
                this.el.find('.news-img').each( function() {
                    this.src = this.getAttribute('data-src');
                });
                this.imagesLoaded = true;
            }
        };

        Carousel.prototype.startSwiper = function () {
            var $container = this.el.find('.swiper-container');
            if (this.el.find('.news-item').length == 1) {
                this.createSingleImage();
            } else {
                this.swiper = this.createMultiSlideSwiperObj();
            }
        };

        Carousel.prototype.createSingleImage = function () {
            this.el.find('.pagination-container').addClass('hidden');
            this.el.find('.swiper-direction').addClass('hidden');
        }

        Carousel.prototype.createMultiSlideSwiperObj = function () {
            var $container = this.el.find('.swiper-container');
            var startSlide;
            if (typeof $container.data('initial-slide') === 'undefined' || $container.data('initial-slide') == 'random') {
              startSlide = Math.floor(Math.random() * this.el.find('.news-item').length);
            } else {
              startSlide = $container.data('initial-slide') - 1;
            }

            var swiper = new Swiper($container.get(0), {
                'mode' : 'horizontal',
                'loop' : 'true',
                'pagination' : this.el.find('.pagination-container').get(0),
                'paginationClickable': true,
                'initialSlide': startSlide,
                'onSlideChangeEnd': function (swiperObj) {
                    this.changeActiveLabel(swiperObj.activeLoopIndex);
                }.bind(this)
            });

            $container.find('.swiper-direction').on('click', function() {
                if ($(this).data('direction') == 'prev') {
                    swiper.swipePrev();
                } else {
                    swiper.swipeNext();
                }
            }.bind(this));

            this.changeActiveLabel(swiper.activeLoopIndex);

            return swiper;
        }
        Carousel.prototype.addMediaQueryEvents = function () {
            var ins = this;
            Browser.onMediumLargeView(function () {
                ins.loadCarouselImages();
            });
        };

        Carousel.prototype.initialize = function ($el) {
            this.startSwiper();
            this.loadCarouselImages();
            this.addMediaQueryEvents();
        };

        return Carousel;
    }
);
