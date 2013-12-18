define(['jquery', 'browser'], function ($, Browser)
	{
		Table = {
			initialize: function () {
				var tables = $('.sa-table');
				this.tableExists = (tables.length > 0);


			}
		};

		return Table;
	}
);