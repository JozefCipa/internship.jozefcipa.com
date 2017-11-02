$(document).ready(function () {
	
	// title update
	var $title = $('title');
	var title = $title.html();
	$(window).on('blur', function () {
		$title.html('I miss you 😞, come back!');
	});
	$(window).on('focus', function () {
		$title.html(title);
	});

	// sections opacity when scrolling
	$(window).on('load scroll', function () {

		var windowHeight = $(window).height();
		var position = $(window).scrollTop();

		if (position < 0) return;

		$('#landing').css('opacity', (1 - (position / windowHeight) * 1.01));
		$('#about-me').css('opacity', (position / windowHeight) * 1.3);
	});
});