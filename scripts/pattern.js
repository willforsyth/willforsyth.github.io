(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
require('./components/toolbar');
$('body').toolbar();

},{"./components/toolbar":1}]},{},[2]);
