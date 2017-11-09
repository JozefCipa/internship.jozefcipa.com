$(document).ready(function () {

	Cookies.set('spotify-website-visited', true, { domain: 'jozefcipa.com', expires: 365});

	// hide sections
	$('#about-me, #why, #skills, #experience, #education').css('opacity', 0);
	$('#skills .content div').css('opacity', 0);

	$(window).on('load scroll', function () {

		// fade out landing section 
		var windowHeight = $(this).height();
		var position = $(this).scrollTop();
		$('#landing').css('opacity', (1 - (position / windowHeight) * 1.1));

		// fading in sections on scrolling
		$('#about-me, #why, #skills, #experience, #education').animateDisplay();

		// fading skills
		$('#skills .content div').animateDisplay(2/15);
	});
});

$.fn.animateDisplay = function (positionRatio) {

	if (positionRatio == undefined) {
		positionRatio = 1 / 3; // animation triggers when 1/3 of section is scrolled into window
	}

	return $(this).each(function () {
		var $window = $(window);

		var sectionStart = $(this).position().top;
		var currentScrollPosition = $window.scrollTop();

		if (currentScrollPosition > sectionStart - ($window.height() * (1 - positionRatio))) {
			$(this).addClass('animated fadeIn');
		}
	});
}