// Слайдер
new Swiper(".thank-you-letters__swiper .swiper", {
    navigation: {
        nextEl: '.thank-you-letters__swiper .swiper-btn-next',
        prevEl: '.thank-you-letters__swiper .swiper-btn-prev',
    },
    loop: true,
    freeMode: {
        enabled: true,
        sticky: true,
    },
    spaceBetween: 30,
    speed: 600,
    keyboard: true
});

// Галерея
Fancybox.bind("[data-fancybox]", {});