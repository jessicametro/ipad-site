$(document).ready(function(){
	
	if (navigator.userAgent.match(/iPad/i) != null) {
		$(window).bind('orientationchange', function(e, onready){
			if (Math.abs(window.orientation) != 90){
				$('body').addClass('portrait').append('<img id="orientNotice" src="images/orient_notice.png" alt="" width="768" height="1004" />');
			} 
			else {
				$('body').removeClass('portrait');
				$('#orientNotice').remove();
			}
		});
		$(window).trigger('orientationchange', true);
	};
	
	goToPage("#splash");
	
	
	/* Begin jQuery Choice */
	
	$(function() {
		$("#choose .tile").choice({
			selected:function(element, index, list){
				console.log("Successfully Selected");
				$(element).addClass("selected");
				$(element).find(".subtext").text(index+".");
			},
			unselected:function(element, index, list){
				console.log("Unsuccessfully Selected");
				$(element).removeClass("selected");
				$(element).find(".subtext").text(".");
			},
			max: 3,
			allselected:function() {
				$(".status").text("All Selected.");
			},
			cleared:function() {
				$(".status").text("Cleared.");
			}
		});
	});

	/* End jQuery Choice */


	$(".prevChoose").click(function(){
		goToPage("#choose");
	});
	
	$(".nextFlexslider").click(function(){
		setUpFlexslider();
		goToPage(".flexslider");
	});	
	
});


/* Begin Flex Slider */

var setUpFlexslider = function(){
	$('.flexslider').flexslider({
		selector: ".slides > div",
		animation: "slide",
		controlNav: "thumbnails",
		slideshow: false,  
	});
	$(".flex-prev").click(function(){
		var currentSlide = $('.flexslider').data('flexslider').currentSlide;
		if (currentSlide == 0) {
			goToPage("#menu");
		}
	});
	$(".startAgain").click(function(){
		goToPage("#choose");
	});
};

var goToPage = function(pageID) {
	$(".page").fadeOut();
	$(pageID).fadeIn();
};

/* End Flex Slider */


$(window).load(function(){
	window.setTimeout(function() {
		goToPage("#choose");
	}, 1000);
});

// goToPage("#splash");

// goToPage("#choose");

// goToPage("#menu");


