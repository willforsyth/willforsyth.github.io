/*global $ */
$.fn.toolbar = function (options) {
    'use strict';
    $('.toolbar__show').on('click', function(e){
    	e.preventDefault();
    	$('.toolbar__inner').toggleClass('show');
    });
    console.log('This is the toolbar');
    $('.toolbar').on('click', '[data-width]', function() {
	    var width = $(this).data('width');
	    $('.pattern__wrapper').animate({'width': width});
	});
};
