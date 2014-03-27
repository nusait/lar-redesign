define(['jquery', 'browser'], function ($, Browser)
	{
		var DepartmentFooter = {
			initialize: function () {
				this.addMediaQueryEvents();
				$(".footer .arrow-button").click(function () {
					$(this).parent().parent().toggleClass('closed');
					$('.main').scrollTop(99999); // Force to bottom
				});
			},

			addMediaQueryEvents: function () {
				var ins = this;
				// Browser.onMediumLargeView(this.close);
			},

			close: function () {
				console.log('footer closed');
				$('.footer').addClass('closed');
			}

		};
		return DepartmentFooter;
	}
);
