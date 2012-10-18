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
	
	$(function() {
		$("#options .tile").choice({
			selected:function(element,list,index){
					console.log("Yay!");
					$(element).addClass("selected");
					$(element).find(".subtext").text(index+".");
				},
				unselected:function(element,list,index){
					console.log("Awww.");
					$(element).removeClass("selected");
					$(element).find(".subtext").text(".");
				},
			max: 3,
		});
	});

	$(".prevChoose").click(function(){
		goToPage("#choose");
	});
	
	$(".nextFlexslider").click(function(){
		setUpFlexslider();
		goToPage(".flexslider");
	});	
	
});

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



$(window).load(function(){
	window.setTimeout(function() {
		goToPage("#choose");
	}, 1000);
});

// goToPage("#splash");

// goToPage("#choose");

// goToPage("#menu");


