define(['leaflet', 'underscore'], function (L, _) {
	L.Icon.Default.imagePath = '//www.northwestern.edu/studentaffairs/global-assets/public/assets/leaflet-dist/images/';
	var Map = function ($map) {
		this.map = {};
		this.options = {};
		this.initialize($map);
	};

	var proto = {
		defaultOptions: {
			center: [42.0523583, -87.6787],
			zoom: 14,
			maxZoom: 18,
			url: 'https://{s}.tiles.mapbox.com/v3/nusaitweb.hl31on6d/{z}/{x}/{y}.png',
			scrollWheelZoom: false,
			//subdomains: ['ssl-tiles'],
			attribution: 'Data Provided by <a href="http://www.mapbox.com" target="_blank">Mapbox</a>.',
		},
		initialize: function ($map) {
			var options = this.processMap($map);
			_.extend(this.options, this.defaultOptions, options);
			this.setHeight();
			this.newMap(options.canvasId);
		},
		processMap: function ($map) {
			var options = {
				canvasId: $map.data('canvas'),
				center: [$map.data('center-lat'), $map.data('center-long')],
				zoom: $map.data('init-zoom'),
				minZoom: $map.data('min-zoom'),
				maxZoom: $map.data('max-zoom'),
				scrollWheelZoom: $map.data('scroll-zoom'),
				dragging: $map.data('dragging'),
				height: $map.data('height')
			};
			if ( typeof $map.data('zoom') != 'undefined') {
				options.zoomControl = $map.data('zoom');
				options.doubleClickZoom = $map.data('zoom');
				options.touchZoom = $map.data('zoom');
				options.boxZoom = $map.data('zoom');
			}
			return options;
		},
		addMarker: function (data) {
			var marker = L.marker(data.point, data).bindPopup(data.content).addTo(this.map);
			if (data.open) {
				marker.openPopup();
			}
		},
		newMap: function (id) {
			this.map = L.map(id, this.getMapOptions());
			// console.log(this.getMapOptions());
			var mapquest = new L.TileLayer(this.options.url, this.getTileOptions());
			mapquest.addTo(this.map);
			// this.disableScrollZoom();
		},
		getMapOptions: function () {
			return _.pick(this.options, ['center', 'scrollWheelZoom', 'zoom', 'dragging', 'zoomControl', 'doubleClickZoom', 'touchZoom', 'boxZoom']);
		},
		getTileOptions: function () {
			return _.pick(this.options, ['subdomains', 'attribution', 'minZoom', 'maxZoom']);
		},
		setHeight: function () {
			$('#' + this.options.canvasId).css({height: this.options.height + 'px'});
		}
		// disableScrollZoom: function () {
		// 	if ( ! this.options.scrollWheelZoom) {
		// 		this.map.scrollWheelZoom.disable();
		// 	}
		// }
	}

	_.extend(Map.prototype, proto);

	return Map;

	}
);


// define(['async!http://maps.google.com/maps/api/js?key=AIzaSyAQ88I4IQN9H4boAonlgEq-TZXtr6blxlo&sensor=false'], function ()
// 	{
// 				var mapOptions = {
// 			          center: new google.maps.LatLng(-34.397, 150.644),
// 			          zoom: 8
// 			        };
// 		        var map = new google.maps.Map(document.getElementById("map-0"), mapOptions);

// 		return window.google.maps;
// 	}
// );

// define(['gmaps'], function ()
// 	{
// 		var Map = function () {
// 			var mapOptions = {
// 		          center: new google.maps.LatLng(-34.397, 150.644),
// 		          zoom: 8
// 		        };
// 	        var map = new google.maps.Map(document.getElementById("map-0"), mapOptions);
// 		};

// 		return Map;
// 	}
// );

// define(['async!http://maps.google.com/maps/api/js?key=AIzaSyAQ88I4IQN9H4boAonlgEq-TZXtr6blxlo&sensor=false'], function ()
// 	{
// 		console.log('map should be loaded now');
// 		var Map = function () {
// 			console.log(google.maps);
// 			var mapOptions = {
// 	          center: new google.maps.LatLng(-34.397, 150.644),
// 	          zoom: 8
// 	        };
// 	        var map = new google.maps.Map(document.getElementById("map-0"),
// 	            mapOptions);
// 		};

// 		Map.prototype.addMarker = function (data) {

// 		};

// 		return Map;
// 	}
// );
