$(document).ready(function(){

	$("#hamburger_btn").click(function(e) {
			$("nav").toggleClass("mobile-nav");
			e.preventDefault();		
		});
	
});