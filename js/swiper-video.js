// Слайдер "Наши счастливые свадебные истории"
const weddingSwiper = new Swiper(".saint-petersburg-section12__swiper .swiper", {
    navigation: {
        prevEl: ".saint-petersburg-section12__swiper .swiper-btn-prev",
        nextEl: ".saint-petersburg-section12__swiper .swiper-btn-next"
    },
    freeMode: {
        enabled: true,
        sticky: true
    },
    keyboard: true,
    speed: 600,
    spaceBetween: 20
});

const weddingSlide1 = document.querySelector('.wedding-slide1');
const weddingSlide2 = document.querySelector('.wedding-slide2');
const weddingSlide3 = document.querySelector('.wedding-slide3');
const videoTitles = document.querySelectorAll('.video-title span');
const videoTitle1 = document.querySelector('.video-title1');
const videoTitle2 = document.querySelector('.video-title2');
const videoTitle3 = document.querySelector('.video-title3');

weddingSwiper.on('slideChangeTransitionEnd', function () {
    videoTitles.forEach((videoTitle) => {
        if (videoTitle.classList.contains('_visible')) {
            videoTitle.classList.remove('_visible');
        }
    });
    if (weddingSlide1.classList.contains('swiper-slide-active')) {
        videoTitle1.classList.add('_visible');
    }
    else if (weddingSlide2.classList.contains('swiper-slide-active')) {
        videoTitle2.classList.add('_visible');
    }
    else if (weddingSlide3.classList.contains('swiper-slide-active')) {
        videoTitle3.classList.add('_visible');
    }
});

weddingSwiper.on('slideResetTransitionEnd', function () {
    videoTitles.forEach((videoTitle) => {
        if (videoTitle.classList.contains('_visible')) {
            videoTitle.classList.remove('_visible');
        }
    });
    if (weddingSlide1.classList.contains('swiper-slide-active')) {
        videoTitle1.classList.add('_visible');
    }
    else if (weddingSlide2.classList.contains('swiper-slide-active')) {
        videoTitle2.classList.add('_visible');
    }
    else if (weddingSlide3.classList.contains('swiper-slide-active')) {
        videoTitle3.classList.add('_visible');
    }
});