define(['jquery'], function ($)
	{
		var Machform = {
			makeForm: function (){
				var mf = $('.machform');
				if (mf.length == 0) {
					return;
				}
				var __machform_url = 'https://forms.dosa.northwestern.edu/embed.php?id=' + mf.data('id');
				var iframe = $('<iframe onload="javascript:parent.scrollTo(0,0);" height="300" allowTransparency="true" frameborder="0" scrolling="no" style="width:100%;border:none;" src="'+__machform_url+'"><a href="'+__machform_url+'">View Form</a></iframe>');
				window.addEventListener('message', function (e) {
					var patt = /.*mf_iframe_height=(\d+)/;
					var height = e.data.match(patt)[1];
					iframe.height(height);
					console.log(height);
				});
				mf.after(iframe);
				mf.remove();
				
			}
		};
		return Machform;
	}
);