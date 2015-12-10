/*global define:false */
$.fn.mailchimp = function (options) {
    return this.each(function () {
        $('.form__mailchimp').ajaxChimp({
			callback: mailchimpSuccess,
			language: 'custom'
		});


        function mailchimpSuccess(response){
			if (response.result === 'success') {
				var  $overlay = $('<div id="overlay"></div>');
				var $content = $('<div class="overlay-inner column column__center column__12-of-12 column__12-of-12--small column__8-of-12--medium column__6-of-12--large"><div class="overlay-inner__inner"><h1>thanks.</h1><h2>For signing up, we will email you with more information in due course for now why not follow us on <a href="https://twitter.com/epoch_community" title="Follow is on twitter" title="Folow us on twitter">Twitter</a>.</h2></div></div>');
				var $close = $('<h2 class="close-lightbox">x</h2>');
				$('body').addClass('noscroll');
				$overlay.append($content);
				$content.append($close);
				$('body').append($overlay);
				$overlay.show();
				$close.on('click', function(){
					$overlay.slideUp();
					$('body').removeClass('noscroll');
				});
				$overlay.on('click', function(){
					$(this).slideUp();
					$('body').removeClass('noscroll');
				});
				var message = ('Thanks, believe in yourself');
				$('#mc-embedded-subscribe-form').html(message);
				$('#mc-embedded-subscribe-form').css({"color": "#FFFFFF"});
				$('#mc-embedded-subscribe-form').css({"margin": "auto", "max-width": "16em" , "font-size": "50px", "font-weight": "bold"});
			} else {
				var error = document.createElement('span');
				error.className = 'error-message';
				var resError = response.msg.slice(3);
				error.innerHTML = resError;
				$('.error-message').remove();
				$('#mc-embedded-subscribe-form').append(error);
			}
		}
    });
};