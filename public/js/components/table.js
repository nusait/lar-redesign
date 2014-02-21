define(['jquery', 'browser'], function ($, Browser)
	{
		Table = function ($table) {
			this.$table;
			this.headerCols = [];
			this.categories = {};
			this.initialize($table);
		};

		Table.prototype.initialize = function ($table) {
			var ins = this;
			this.$table = $table;
			if (Browser.detectView() == 'small') {
				ins.create();
			}
			
			Browser.onSmallView(function() {
				ins.create();
			});

			Browser.onMediumLargeView(function () {
				ins.destroy();
			});
		};
		
		Table.prototype.create = function () {
			this.processTable();
			this.hideColumns();
			this.injectDropdown();
			this.addEventListeners();
		}

		Table.prototype.processTable = function () {
			var ins = this;
			ins.$table.find('tr').each(function (rowi, tr) {
				$(tr).children().addClass('row' + (rowi+1)).each(function (coli, cell) {
					if (rowi == 0 && $(cell).is('th') && $(cell).text().length > 0) {
						$(cell).addClass('table-category colhead');
						$(cell).attr('data-col', coli);
						var cat = {
							name: $(cell).text(),
							col: coli
						};
						ins.categories['col' + coli] = cat;
					};
					if( $(cell).is('th[scope=row]') ) {
						ins.$table.find('.table-category.col' + coli).removeClass('table-category');
						delete ins.categories['col' + coli];
						$(cell).addClass('rowhead');
					}
					$(cell).addClass('col' + (coli));
				});
			});
		};
		
		Table.prototype.destroy = function () {
			this.$table.find('.table-dropdown').remove();
			this.$table.find('td,th').removeClass('hidden');
			this.categories = {};
			this.$table.off();
		};

		Table.prototype.hideColumns = function () {
			this.$table.find('td,th').not('.col0,.col1').addClass('hidden');
		};

		Table.prototype.hideInactiveColumns = function () {
			var $heads = this.$table.find('.table-category').not('.active');
			var ins = this;
			$heads.each(function (index, head) {
				var i = $(head).data('col');
				ins.$table.find('.col' + i).addClass('hidden');
			});
		};

		Table.prototype.showActiveColumn = function () {
			coli = this.$table.find('.colhead.active').data('col');
			this.$table.find('.col' + coli).removeClass('hidden');
		};
		
		Table.prototype.injectDropdown = function () {
			var dropdown = $('<div class="table-dropdown closed"></div>');
			var catdiv;
         for (prop in this.categories) {
            category = this.categories[prop];
            catdiv = $('<div class="dropdown-category" data-index="' + category.col+ '"></div>');
            dropdown.append(catdiv.text(category.name));
         }
			dropdown.append('<div class="close-button"></div>');
			this.$table.find('.table-category').append(dropdown);
		};

		Table.prototype.addEventListeners = function () {
			var ins = this;
			this.$table.on('click', '.table-category', function () {
				$(this).find('.table-dropdown').removeClass('closed');
			});

			this.$table.on('click', '.close-button', function (ev) {
				$(this).parent().addClass('closed');
				ev.stopPropagation();
			});

			this.$table.on('click', '.dropdown-category', function (ev) {
				var index = $(this).data('index');
				ins.setActiveCol(index);
				ins.hideInactiveColumns();
				ins.showActiveColumn();
				$(this).parent().addClass('closed');
				ev.stopPropagation();
			});

			$(document).click(function (ev) {
			    var target = this.$table.find('.table-dropdown');
			    var parent = target.parent();
			    if (!parent.is(ev.target) && !target.is(ev.target) && target.has(ev.target).length === 0) {
			        target.addClass('closed');
			    }
			});
		};

		Table.prototype.setActiveCol = function (index) {
			this.$table.find('.colhead.active').removeClass('active');
			this.$table.find('.colhead.col' + index).addClass('active');
		};

		return Table;
	}
);
