/*global $ */
$.fn.particles = function (options) {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles'), {
      dotColor: '#f08888',
      lineColor: '#f08888',
      density: '10000',
      proximity: 100,
      directionX: 'center'
    });
    }, false);

    document.addEventListener('DOMContentLoaded', function () {
    particleground(document.getElementById('particles-green'), {
      dotColor: '#80d6bf',
      lineColor: '#80d6bf',
      density: '10000',
      proximity: 100,
      directionX: 'center'
    });
    }, false);

  // Initialisation
};
