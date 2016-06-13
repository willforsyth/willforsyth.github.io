/*jshint unused:false*/
var $ = global.window.$ = window.jQuery = require('../../../bower_components/jquery/dist/jquery.min');
    encode = require('../../../bower_components/js-md5/js/md5');

// Show Me The Code
// ----------
require('./components/filterPosts');
$('.filterSection').filterPosts();

require('../../../bower_components/ajaxchimp/jquery.ajaxchimp.min')
require('./components/mailchimp');
$('body').mailchimp();

window.onload = function() {
    $(".loading").fadeOut('slow');
};

$('.back').on('click', function(){
  window.history.back()
});

require('./components/map');
$('header').map();
