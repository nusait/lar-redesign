define(['jquery'], function ($)
	{
		var Collapsable = {
			initialize: function () {
				this.toggleOpenCloseOnClick();
			},
			toggleOpenCloseOnClick: function () {
				$('.collapsable-title').click(function () {
					$(this).parent().toggleClass('closed');
				});
			}
		};
		return Collapsable;
	}
);