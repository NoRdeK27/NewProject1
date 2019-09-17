function validateForm(popup_container_tel, tel_form){	
		const form = $('#' + 'tel_form')[0]; // Форма, найденная по ID
   		const popup = $('#' + 'popup_container_tel'); // Попап, найденный по ID

   		if (form.checkValidity())  // Если проверка формы на валидность прошла
      		popup.hide(); // закрываем попап
  		 else  // иначе
      		form.reportValidity() // Выдаём сообщение об ошибке
};

	function validateForm(popup_container_email, email_form){	
		const form = $('#' + 'email_form')[0]; // Форма, найденная по ID
   		const popup = $('#' + 'popup_container_email'); // Попап, найденный по ID

   		if (form.checkValidity())  // Если проверка формы на валидность прошла
      		popup.hide(); // закрываем попап
  		 else  // иначе
      		form.reportValidity() // Выдаём сообщение об ошибке
};

		
	

$(function () {
	//script for popups
	$('.header_right-column_tel_buttom').click(function () {
		$('#popup_container_tel').show();
		$("html,body").css("overflow","hidden");				
	});	
	$('.close').click(function () {
		$("html,body").css("overflow","visible");
		$('#popup_container_tel').hide();
	});

	$('.button_content').click(function(){
		$('#popup_container_email').show();
		$("html,body").css("overflow","hidden");
	});
		$('.close').click(function () {
		$('#popup_container_email').hide();
		$("html,body").css("overflow", "visible");
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


