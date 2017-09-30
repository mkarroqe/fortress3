// initializer function
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    smartSpeed:1000,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots: false,
    autoplay:true,
    //autoplayTimeout:1700,
    //autoplayHoverPause:true,
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});