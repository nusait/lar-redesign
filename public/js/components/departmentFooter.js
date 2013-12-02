define(['jquery'], function ($)
	{
		var DepartmentFooter = {
			initialize: function () {
				$middle = $('.middle');
				$(".footer .arrow-button").click(function () {
					$(this).parent().parent().toggleClass('closed');
					$middle.scrollTop(99999); // Force to bottom
				});
			},

		};
		return DepartmentFooter;
	}
);