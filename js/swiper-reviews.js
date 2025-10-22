// Отзывы
new Swiper(".home-section7 .swiper", {
    pagination: {
        el: '.home-section7 .swiper-pagination',
        clickable: true
    },
    freeMode: {
        enabled: true,
        sticky: true
    },
    speed: 600,
    keyboard: true,
    grabCursor: true,
    slidesPerView: 1,
    grid: {
        fill: 'row',
        rows: 2
    },
    spaceBetween: 24,
    breakpoints: {
        481: {
            slidesPerView: 1,
            grid: {rows: 2},
            spaceBetween: 32
        },
        768: {
            slidesPerView: 2,
            grid: {rows: 1},
            spaceBetween: 32
        },
        992: {
            slidesPerView: 2,
            grid: {rows: 1},
            spaceBetween: 40
        }
    }
});