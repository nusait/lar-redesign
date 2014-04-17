define(['jquery', 'browser'], function ($, Browser)
	{
		var DepartmentFooter = {
			initialize: function () {
				this.addMediaQueryEvents();
				$(".footer .arrow-button").click(function () {
					$(this).parent().parent().toggleClass('closed');
					$('.main').scrollTop(99999); // Force to bottom
				});
				this.processEmailLink();
				// console.log(department);
			},
			processEmailLink: function () {
				var department = $('.footer .department-name').html();
				var email = department.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g);
				if ( ! email ) {
					return;
				}
				for (var i = 0; i < email.length; i++) {
					var emailAddress = email[i];
					var emailLink = $('<a></a>').html(emailAddress.replace('@', '<wbr>@')).attr('href', 'mailto:' + emailAddress);
					department = department.replace(emailAddress, emailLink[0].outerHTML);
				}

				$('.footer .department-name').html(department);

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
