/*global define:false */
$.fn.logWidth = function (options) {
    return this.each(function () {
        console.log('Plugin test', $(this).width());
    });
};