$(document).ready(function(){ 
	var nav = $('.navbar-fixed-top');

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();

		if (scroll >= 300) {
			nav.removeClass('normal').addClass('efecto');
		}
		else{
			nav.removeClass('efecto').addClass('normal');
		}
	});

$('section#nosotros .anim1').waypoint(function(){
	$(this).addClass('in');
	}, {
		offset: '100%'
	}); 
$('section#nosotros .anim2').waypoint(function(){
	$(this).addClass('expand');
	}, {
		offset: '100%'
	}); 
$('section#servicios .anim1').waypoint(function(){
	$(this).addClass('in');
	}, {
		offset: '100%'
	}); 
$('section#servicios .anim2').waypoint(function(){
	$(this).addClass('expand');
	}, {
		offset: '100%'
	}); 
$('section#servicios .anim3').waypoint(function(){
	$(this).addClass('nepe');
	}, {
		offset: '100%'
	}); 
$('section#servicios .anim4').waypoint(function(){
	$(this).addClass('nepe1');
	}, {
		offset: '100%'
	}); 
$('section#servicios .anim5').waypoint(function(){
	$(this).addClass('nepe2');
	}, {
		offset: '100%'
	}); 
$('section#servicios .anim6').waypoint(function(){
	$(this).addClass('nepe3');
	}, {
		offset: '100%'
	});  

$('section#proyectos .anim1').waypoint(function(){
	$(this).addClass('in');
	}, {
		offset: '100%'
	});
$('section#proyectos .anim2').waypoint(function(){
	$(this).addClass('expand');
	}, {
		offset: '100%'
	});

$('section#presencia .anim1').waypoint(function(){
	$(this).addClass('in');
	}, {
		offset: '100%'
	});
$('section#presencia .anim2').waypoint(function(){
	$(this).addClass('expand');
	}, {
		offset: '8100%'
	});














}); 

smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 800, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
});