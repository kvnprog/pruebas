(function($) {


    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 690) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };

    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse)
})(jQuery);