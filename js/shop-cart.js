$(function() {
	if (window.location.pathname.indexOf('shop-cart') + 1) {
		$.ajax({
			dataType: 'json',
			url: './json/clothes.json',
			success: function(data) {
				console.log('Connect');

					

	
			},
			error: function(data) {
					console.log('Connect error');
			}
		});
	}
});
