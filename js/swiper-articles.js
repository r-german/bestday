// Слайдер "Статьи"
new Swiper(".wedding-invitations-section10 .swiper", {
    navigation: {
        nextEl: '.wedding-invitations-section10 .swiper-btn-next',
        prevEl: '.wedding-invitations-section10 .swiper-btn-prev'
    },
    freeMode: {
        enabled: true,
        sticky: true
    },
    speed: 600,
    keyboard: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        601: {slidesPerView: 2},
        1201: {slidesPerView: 3}
    }
});