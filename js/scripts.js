$(document).ready(function(){
	
	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
	
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
	
	
	/* Begin: jQuery Choice */
	
	$(function() {
		$("#choose .tile").choice({
			selected:function(element, index, list){
				console.log("Successfully Selected");
				$(element).find(".selected").show();
				var name = $(element).find(".name").text();
				setUpSelectedText(name, index);
				var url = $(element).find(".tocThumb").attr("src");
				setUpSelectedTOCThumb(url, index);	
				var url = $(element).find(".navThumb").attr("src");
				setUpNavThumb(url, index);
			},
			unselected:function(element, index, list){
				console.log("Successfully Unselected");
				$(element).find(".selected").hide();
			},
			max: 3,
			allselected:function() {
				$(".status").text("All Selected.");
				goToPage("#menu");
			},
			cleared:function() {
				$(".status").text("Cleared.");
			}
		});
	});

	/* End: jQuery Choice */
	
	setUpFlexslider();
	
	$(".prevChoose").click(function(){
		goToPage("#choose");
	});
	
	$(".nextFlexslider").click(function(){
		goToPage(".flexslider");
		$(".flexslider").flexslider(0);
	});	
	
	
	/* Begin: Choose a TOC Item */
	
	$(".tocPage01").click(function(){
		goToPage(".flexslider");
		$(".flexslider").flexslider(0);
	});
	
	$(".tocPage02").click(function(){
		goToPage(".flexslider");
		$(".flexslider").flexslider(1);
	});
	
	$(".tocPage03").click(function(){
		goToPage(".flexslider");
		$(".flexslider").flexslider(2);
	});
	
	$(".tocPage04").click(function(){
		goToPage(".flexslider");
		$(".flexslider").flexslider(3);
	});
	
	$(".tocPage05").click(function(){
		goToPage(".flexslider");
		$(".flexslider").flexslider(4);
	});
	
	$(".tocPage06").click(function(){
		goToPage(".flexslider");
		$(".flexslider").flexslider(5);
	});
	
	$(".tocPage07").click(function(){
		goToPage(".flexslider");
		$(".flexslider").flexslider(6);
	});
	
	$(".tocPage08").click(function(){
		goToPage(".flexslider");
		$(".flexslider").flexslider(7);
	});
	
	$(".tocPage09").click(function(){
		goToPage(".flexslider");
		$(".flexslider").flexslider(8);
	});
	
	$(".tocPage10").click(function(){
		goToPage(".flexslider");
		$(".flexslider").flexslider(9);
	});
	
	$(".tocPage11").click(function(){
		goToPage(".flexslider");
		$(".flexslider").flexslider(1);
		$(".flexslider").flexslider(10);
	});
	
	/* End: Choose a TOC Item */
	
});

var setUpSelectedText = function(name, position){
	if (position == 0){
		$(".firstObjectText").text(name);
	}
	if (position == 1){
		$(".secondObjectText").text(name);
	}
	if (position == 2){
		$(".thirdObjectText").text(name);
	}		
};


var setUpSelectedTOCThumb = function(url, position){
	if (position == 0){
		$(".firstObjectTOCThumb").attr("src", url);
	}
	if (position == 1){
		$(".secondObjectTOCThumb").attr("src", url);
	}
	if (position == 2){
		$(".thirdObjectTOCThumb").attr("src", url);
	}	
};


var setUpNavThumb = function(url, position){
	if (position == 0){
		$(".flex-control-thumbs li:nth-child(4) img").attr("src", url);
	}
	if (position == 1){
		$(".flex-control-thumbs li:nth-child(6) img").attr("src", url);
	}
	if (position == 2){
		$(".flex-control-thumbs li:nth-child(8) img").attr("src", url);
	}	
};


/* Begin: Flex Slider */

var setUpFlexslider = function(){
	$('.flexslider').flexslider({
		selector: ".slides > div",
		animation: "slide",
		controlNav: "thumbnails",
		slideshow: false,  
		animationLoop: false,
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

/* End: Flex Slider */


$(window).load(function(){
	window.setTimeout(function() {
		goToPage("#choose");
	}, 1000);
});

// goToPage("#splash");

// goToPage("#choose");

// goToPage("#menu");


