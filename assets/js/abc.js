'use strict';

var abc = (function ($) {

    var
    mainMenu = function () {
        var menuOvrl = $('.js-main-menu-ovrl'),
            menuHamburger = $('.js-main-menu-open');
        $('.js-main-menu-open').on('click', function (e) {
            e.preventDefault();
            menuHamburger.hide();
            menuOvrl.addClass('open');
        });
        $('.js-main-menu-close').on('click', function (e) {
            e.preventDefault();
            menuOvrl.removeClass('open');
            menuHamburger.show();
        });
    },

    // https://highlightjs.org/
    syntaxHighlighter = function () {
        hljs.initHighlightingOnLoad();
    },

    // abc javascripts initialization
    init = function () {
        mainMenu();
        $(document).foundation();
        syntaxHighlighter();
    };

    return {
        init: init
    };

})(jQuery);

(function () {
    abc.init();
})();