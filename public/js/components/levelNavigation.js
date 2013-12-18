define(['jquery', 'browser'], function ($, Browser)
	{
		var LevelNavigation = {
			initialize: function () {
				this.nav = $('.sub-navigation-lvl-2-container');
				this.navExists = this.nav.length > 0;
				console.log('level nav initialized');
				this.nav.find('.active').click(function () {
					$(this).toggleClass('closed');
				});
			},
		};

		return LevelNavigation;
	}
);