/*jshint unused:false*/
var $ = global.window.$ = window.jQuery = require('../../../bower_components/jquery/dist/jquery.min');
    encode = require('../../../bower_components/js-md5/js/md5');

// Show Me The Code
// ----------

require('./components/filterPosts');
$('.filterSection').filterPosts();

require('../../../bower_components/ajaxchimp/jquery.ajaxchimp.min');
require('./components/mailchimp');
$('body').mailchimp();

window.onload = function() {
    $(".loading").fadeOut('slow');
};

$('.back').on('click', function(){
  window.history.back()
});

require('./components/particles');
$('header').particles();



console.log('testing')
$('body').on('click', '[data-type="page-transition"]', function(event){
    event.preventDefault();
    //detect which page has been selected
    var newPage = $(this).attr('href');
    changePage(newPage, true);
});

function changePage(url, bool) {
    // trigger page animation
    $('body').addClass('page-is-changing');
    //  $('body').addClass('page-has-changed');
    //...
    setTimeout(function() {
        loadNewContent(url, bool);
    }, 400);

    //...
}

// setTimeout(loadNewContent, 1000);

function loadNewContent(url, bool){
  window.location.assign(url);
}


require('./components/map');
$('header').map();
