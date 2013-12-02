define(['jquery'], function ($)
	{
		var DepartmentHeader = function () {
			this.initialize = function () {
				this.$el = $('.department-header');
				this.closeAll();
				this.openSectionOnClick();
				this.closeSectionOnClick();
				this.toggleMobileMenuOnClick();
			};
			this.closeAll = function () {
				this.$el.find('.section').addClass('closed');
			};
			this.openSectionOnClick = function () {
				var ins = this;
				this.$el.find('.navigation-item-title').click(function () {
					var closed = $(this).parent().hasClass('closed');
					ins.closeAll();
					if (closed) {
						$(this).parent().toggleClass('closed');
					}
				});
			};
			this.closeSectionOnClick = function () {
				var ins = this;
				this.$el.find('.section-title').click(function () {
					$(this).parent().parent().addClass('closed');
				});
				$(document).click(function (ev) {
				    var section = $('.section');
				    if (!section.is(ev.target) && section.has(ev.target).length === 0) {
				        section.addClass('closed');
				    }
				});
			};
			this.toggleMobileMenuOnClick = function () {
				var ins = this;
				this.$el.find('.mobile-menu-button').click(function () {
					$(this).parent().toggleClass('closed');
				})
			}
		}
		return DepartmentHeader;
	}
);