$(window).scroll(function(){
	if ($('.navbar').offset().top > 50) {
		$('.navbar-fixed-top').addClass('top-nav-collapse');
				
	} else {
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
	}
	
});


$(function() {
	$('.page-scroll a').click(function(){
		$('html, body').animate({
			scrollTop:$($(this).attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
		
	});
});
//potrzebne do scrollowania
//tworzymy funkcję anonimową
//musimy mieć nowy plik js, w którym go napiszemy i musimy dołożyć plik z easingiem pobrany ze strony jquery.com

