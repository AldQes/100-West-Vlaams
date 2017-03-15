$(window).load(function(){
	
	// Jquery slideshow
	
	$('#slideshow ul').bxSlider({
		mode: 'fade',
		speed: 500,
		randomStart: true,
		infiniteLoop: true,
		responsive: true,
		auto: true,
		pause: 6000,
        controls: false,
		pager: false,
		nextText: '',
		prevText: ''
	});
		
});
	
