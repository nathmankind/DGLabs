
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:3000,
    nav:true,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
})