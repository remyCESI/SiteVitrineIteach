const Sr = ScrollReveal({
    duration: 2000,
    reset: true,
    mobile: true
})
$(window).on('load', function() {

    $("#imgload").fadeOut("2000");
})
$(document).ready(function() {
    Sr.reveal('.logo-container')
    Sr.reveal('.introduction', {
        delay: 200
    })
    Sr.reveal('.cover', {
        delay: 200
    })
    Sr.reveal('.ActionPrez', {
        delay: 500
    })

    Sr.reveal('H1', {
        duration: 500
    })

    Sr.reveal('.Actu', {
        duration: 500
    }, 50)






    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        pagination: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 2,


            }
        }
    })
});