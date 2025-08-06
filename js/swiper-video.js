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
const weddingSlide4 = document.querySelector('.wedding-slide4');
const weddingSlide5 = document.querySelector('.wedding-slide5');
const weddingSlide6 = document.querySelector('.wedding-slide6');
const weddingSlide7 = document.querySelector('.wedding-slide7');
const videoTitles = document.querySelectorAll('.video-title span');
const videoTitle1 = document.querySelector('.video-title1');
const videoTitle2 = document.querySelector('.video-title2');
const videoTitle3 = document.querySelector('.video-title3');
const videoTitle4 = document.querySelector('.video-title4');
const videoTitle5 = document.querySelector('.video-title5');
const videoTitle6 = document.querySelector('.video-title6');
const videoTitle7 = document.querySelector('.video-title7');

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
    else if (weddingSlide4.classList.contains('swiper-slide-active')) {
        videoTitle4.classList.add('_visible');
    }
    else if (weddingSlide5.classList.contains('swiper-slide-active')) {
        videoTitle5.classList.add('_visible');
    }
    else if (weddingSlide6.classList.contains('swiper-slide-active')) {
        videoTitle6.classList.add('_visible');
    }
    else if (weddingSlide7.classList.contains('swiper-slide-active')) {
        videoTitle7.classList.add('_visible');
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
    else if (weddingSlide4.classList.contains('swiper-slide-active')) {
        videoTitle4.classList.add('_visible');
    }
    else if (weddingSlide5.classList.contains('swiper-slide-active')) {
        videoTitle5.classList.add('_visible');
    }
    else if (weddingSlide6.classList.contains('swiper-slide-active')) {
        videoTitle6.classList.add('_visible');
    }
    else if (weddingSlide7.classList.contains('swiper-slide-active')) {
        videoTitle7.classList.add('_visible');
    }
});