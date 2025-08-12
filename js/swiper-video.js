// Первый слайдер с видео
const weddingSwiper1 = new Swiper("#video-slider1 .swiper", {
    navigation: {
        prevEl: "#video-slider1 .swiper-btn-prev",
        nextEl: "#video-slider1 .swiper-btn-next"
    },
    freeMode: {
        enabled: true,
        sticky: true
    },
    keyboard: true,
    speed: 600,
    spaceBetween: 20
});

const videoSlider1 = document.getElementById('video-slider1');
const weddingSlide1 = videoSlider1.querySelector('.wedding-slide1');
const weddingSlide2 = videoSlider1.querySelector('.wedding-slide2');
const weddingSlide3 = videoSlider1.querySelector('.wedding-slide3');
const weddingSlide4 = videoSlider1.querySelector('.wedding-slide4');
const weddingSlide5 = videoSlider1.querySelector('.wedding-slide5');
const weddingSlide6 = videoSlider1.querySelector('.wedding-slide6');
const weddingSlide7 = videoSlider1.querySelector('.wedding-slide7');
const videoTitles = videoSlider1.querySelectorAll('.video-title span');
const videoTitle1 = videoSlider1.querySelector('.video-title1');
const videoTitle2 = videoSlider1.querySelector('.video-title2');
const videoTitle3 = videoSlider1.querySelector('.video-title3');
const videoTitle4 = videoSlider1.querySelector('.video-title4');
const videoTitle5 = videoSlider1.querySelector('.video-title5');
const videoTitle6 = videoSlider1.querySelector('.video-title6');
const videoTitle7 = videoSlider1.querySelector('.video-title7');

weddingSwiper1.on('slideChangeTransitionEnd', function () {
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

weddingSwiper1.on('slideResetTransitionEnd', function () {
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

// Второй слайдер с видео
new Swiper("#video-slider2 .swiper", {
    navigation: {
        prevEl: "#video-slider2 .swiper-btn-prev",
        nextEl: "#video-slider2 .swiper-btn-next"
    },
    freeMode: {
        enabled: true,
        sticky: true
    },
    keyboard: true,
    speed: 600,
    spaceBetween: 20
});