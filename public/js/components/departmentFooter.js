define(['jquery', 'browser'], function ($, Browser)
	{
		var DepartmentFooter = {
			initialize: function () {
				console.log(Browser);
				this.addMediaQueryEvents();
				console.log(Browser);
				$(".footer .arrow-button").click(function () {
					$(this).parent().parent().toggleClass('closed');
					$('.main').scrollTop(99999); // Force to bottom
				});
			},

			addMediaQueryEvents: function () {
				var ins = this;
				Browser.onMediumLargeView(this.close);
			},

			close: function () {
				console.log('footer close called');
				$('.footer').addClass('closed');
			}

		};
		return DepartmentFooter;
	}
);