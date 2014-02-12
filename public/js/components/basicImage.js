define(['jquery', 'browser'], function ($, Browser)
	{
		var BasicImage = {
			initialize: function () {
				if( $('.stamp.type-basic').length > 0 && $('.basic-image-item').length > 1) {
					if (Browser.detectView() == 'small') {
						this.makeSwiper();
					}
					Browser.onSmallView(this.makeSwiper.bind(this));
					Browser.onMediumLargeView(this.destroySwiper.bind(this));
				}
			}, 
			makeSwiper: function () {
				this.swiperIns = $('.basic-image-container').swiper({
					wrapperClass: 'basic-image-wrapper',
					slideClass: 'basic-image-item',
					calculateHeight: true,
				});
				this.showArrowOverlay();
			},
			destroySwiper: function () {
				this.swiperIns.destroy();
				$('.basic-image-wrapper')
					.attr('style', '');
				$('.basic-image-item')
					.attr('style', '')
					.removeClass('swiper-slide-visible')
					.removeClass('swiper-slide-active');
			},
			showArrowOverlay: function () {
				console.log('arrow overlay called');
				$('.basic-image-container').addClass('show-arrow-overlay');

				setTimeout(this.hideArrowOverlay.bind(this), 2000);
			},
			hideArrowOverlay: function () {
				$('.basic-image-container').removeClass('show-arrow-overlay');
			}
		};
		return BasicImage;
	}
);