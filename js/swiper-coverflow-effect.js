// Слайдер с эффектом "coverflow"
new Swiper(".slider-with-coverflow-effect .swiper", {
    navigation: {
        nextEl: '.slider-with-coverflow-effect .swiper-btn-next',
        prevEl: '.slider-with-coverflow-effect .swiper-btn-prev'
    },
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: 1,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
    },
    freeMode: {
        enabled: true,
        sticky: true
    },
    speed: 600,
    keyboard: true,
    breakpoints: {
        481: {slidesPerView: 2},
        992: {slidesPerView: 3}
    }
});