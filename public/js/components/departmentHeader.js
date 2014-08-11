define(['jquery'], function ($)
	{
		var DepartmentHeader = function () {
			this.initialize = function () {
				this.$el = $('.department-header');
				this.closeAll();
				this.openSectionOnClick();
				this.closeSectionOnClick();
				this.toggleMobileMenuOnClick();
				this.openSectionOnFocus();
				console.log('department header loaded');
			};

			this.closeAll = function () {
				this.$el.find('.section').addClass('closed');
			};
			this.openSectionOnFocus = function () {
				var ins = this;
				// this.$el.find('li').on('focusout', function (evt) {
				// 	console.log('focused out');
				// });
				// this.$el.find('.section').on('focus', 'li', function (evt) {
				// 	var $section = $focusedSection;
				// 	if ( ! $section.has(this)) {
				// 		$section.addClass('closed');
				// 	}
				// 	$lastFocused = $(this);
				// });
				// 
				
				this.$el.find('.section').on('blur', 'a', function (evt) {
					var $blurredEl = $(this);
					var $blurredSection = $blurredEl.parent().parent().parent();
					// var $focusedEl = $blurredEl;
					// var $focusedSection = $blurredSection;

					setTimeout(function () {
						var $focusedEl = $(document.activeElement);
						var $focusedSection = $focusedEl.parent().parent().parent();
						
						if ($blurredSection.text() !== $focusedSection.text() ) {
							$blurredSection.addClass('closed');
							console.log($blurredSection);
						}
					}, 30);
				});

				this.$el.find('.section').on('blur', function (evt) {
					var blurredEl = this;

					setTimeout(function () {
						if ( ! $.contains(blurredEl, document.activeElement)) {
							$(blurredEl).addClass('closed');
						}
					}, 30);
				});

				this.$el.find('.section').focus(function () {
					// console.log('focused');
					// if ($focusedSection !== $lastFocusedSection) {
					// 	$lastFocusedSection.addClass('closed');
					// }
					$(this).removeClass('closed');
				});
				
				//TODO fix on blur on the last dropdown link
				
				// this.$el.find('a').blur(function () {
				// 	console.log('blurred');
				// 	if ($(this).siblings($(':focus')).length > 0) {
				// 		console.log('has it!!!');
				// 		return;
				// 	}
				// 	// ins.closeAll();
				// })
			}

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
				    var section = $('.department-header .section');
				    if (!section.is(ev.target) && section.has(ev.target).length === 0) {
				        section.addClass('closed');
				    }
				});
			};

			this.toggleMobileMenuOnClick = function () {
				var ins = this;
				this.$el.find('.mobile-menu-button').click(function () {
					$(this).parent().toggleClass('closed');
				});
			};
		}

		return DepartmentHeader;
	}
);