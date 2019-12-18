$(document).ready(function () {
    const  responsive={
        0:{
            items:1
        },
        320:{
            items:1
        },
        520:{
            items:2
        },
        960:{
            items:3
        },
    };
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function () {

        $nav.toggleClass("collapse")
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        responsive: responsive
    });

    $('.move-up span').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    AOS.init()
});
