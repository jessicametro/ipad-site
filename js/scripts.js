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
	
	// your jQuery code here

});