$(function () {
	//script for popups
	$('.header_right-column_tel_buttom').click(function () {
		$('#popup_container_tel').show().fadeIn(3000);				
	});	
	$('.close').click(function () {
		$(this).parent().fadeOut(1500);
		$('#popup_container_tel').remove();
	});

	$('.button_content').click(function(){
		$('#popup_container_email').show();
	});
		$('.close').click(function () {
		$(this).parent().fadeOut(1500);
		$('#popup_container_email').remove();
	});

$(document).ready(function($){
	var backButton = '<button class="button_arrow_left"></button>';
	var	nextButton = '<button class="button_arrow_right"></button>';

		$('.mywork_content').slick({
			infinite: true,
			dots:false,
			prevArrow:backButton,
			nextArrow:nextButton,
		  	arrows:true,
		    slidesToShow: 3,
		    slidesToScroll: 1,
		    responsive: [
			{
		    	breakpoint: 1180,
		    	settings: {
		      		arrows:false,
		      		dots:true,
		        	slidesToShow: 2
					}
		    },
		    {
		    	breakpoint: 900,
		    	settings: {
		    		slidesToShow: 1,
		    		dots:true,
		    		arrows:false
				}
			},
		]
			})
		});


});


