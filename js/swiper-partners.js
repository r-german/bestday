// Слайдер "Партнеры"
new Swiper('.swiper-partners', {
    speed: 3000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 0
    },
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
        481: {
            slidesPerView: 3,
            spaceBetween: 60
        },
        601: {
            slidesPerView: 4,
            spaceBetween: 60
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 80
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 60
        },
        1201: {
            slidesPerView: 5,
            spaceBetween: 80
        }
    }
});