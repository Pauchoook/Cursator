$(document).ready(function() {
    $('.slider__offer').slick({
        arrows:true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed:4000,
        draggable: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows:false
                }
            }
        ]
    });
});

$(document).ready(function() {
    $('.slider-pages__cards-courses').slick({
        slidesToShow:3,
        draggable: false
    });
});