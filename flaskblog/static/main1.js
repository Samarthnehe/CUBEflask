$(document).ready(function () {
    $(window).on('scroll', function () {
  
    if ($(this).scrollTop() > 0) {
        if (!$('nav').hasClass('navbar-scrolled')) {
            $('nav').addClass('navbar-scrolled');
            console.log()
        }
    } else {
        if ($('nav').hasClass('navbar-scrolled')) {
            $('nav').removeClass('navbar-scrolled');
        }
    }
    });
    $("#down-arrow").click(function () {
        console.log($("arrow"));
        $('html, body').animate({
            scrollTop: $("#arrow").offset().top
        }, 1000);
    });
  })