const weddingStyleSection2 = document.querySelector('.wedding-style-section2');
const stage1 = document.querySelector('.test__stage1');
const stage2 = document.querySelector('.test__stage2');
const stage3 = document.querySelector('.test__stage3');
const stage4 = document.querySelector('.test__stage4');
const stage5 = document.querySelector('.test__stage5');

// Этап1 "Пройти тест"
document.querySelector('.test__stage1 button').addEventListener('click', function() {
    weddingStyleSection2.style.backgroundColor = 'rgba(49, 44, 59, 0.6)';
    stage1.classList.remove('_visible');
    stage2.classList.add('_visible');
});

// Этап2 "Начать тест"
document.querySelector('.test__stage2 form').addEventListener('submit', function(e) {
    e.preventDefault();
    stage2.classList.remove('_visible');
    stage3.classList.add('_visible');
});

// Этап3 "Выберите фото"
const stage3LastImages = document.querySelectorAll('.test__stage3 .swiper-slide:last-child picture');
const stage3Swiper = new Swiper(".test__stage3 .swiper", {
    pagination: {
        el: ".test__stage3 .swiper-pagination",
        type: "progressbar",
    },
    allowTouchMove: false,
    effect: "fade",
    fadeEffect: {crossFade: true},
    speed: 600,
    on: {
        slideChangeTransitionEnd: function () {
            if (this.isEnd) {
                stage3LastImages.forEach((stage3LastImage) => {
                    stage3LastImage.addEventListener('click', function() {
                        stage3.classList.remove('_visible');
                        stage4.classList.add('_visible');
                    });
                });
            }
        },
    }
});

const stage3Images = document.querySelectorAll('.test__stage3 picture:not(.swiper-slide:last-child picture)');
stage3Images.forEach((stage3Image) => {
    stage3Image.addEventListener('click', function() {
        stage3Swiper.slideNext();
    });
});

// Этап4 "Комментарий"
const testCross = document.querySelector('.test__cross');
document.querySelector('.test__stage4 form').addEventListener('submit', function(e) {
    e.preventDefault();
    stage4.classList.remove('_visible');
    stage5.classList.add('_visible');
    testCross.classList.add('_visible');
});

// Этап5 "Тест закончен"
testCross.addEventListener('click', function() {
    testCross.classList.remove('_visible');
    stage5.classList.remove('_visible');
    stage1.classList.add('_visible');
    weddingStyleSection2.style.backgroundColor = '';
    stage3Swiper.setProgress(0, 0);
});