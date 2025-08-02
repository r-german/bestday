// Слайдер (Секция 1)
const swiper1 = new Swiper(".home-section1 .swiper", {
    pagination: {
        el: '.home-section1 .swiper-pagination',
        clickable: true
    },
    loop: true,
    autoplay: {
        disableOnInteraction: true
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    speed: 600,
    keyboard: true
});

const slide1 = document.querySelector('.swiper-slide1');
const slide2 = document.querySelector('.swiper-slide2');
const slide3 = document.querySelector('.swiper-slide3');
const slide4 = document.querySelector('.swiper-slide4');
const homeSection1 = document.querySelector('.home-section1 .container');

swiper1.on('slideChangeTransitionEnd', function () {
    if (slide1.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide1');
    }
    else if (slide2.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide2');
    }
    else if (slide3.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide3');
    }
    else if (slide4.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide4');
    }
});

swiper1.on('slideResetTransitionEnd', function () {
    if (slide1.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide1');
    }
    else if (slide2.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide2');
    }
    else if (slide3.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide3');
    }
    else if (slide4.classList.contains('swiper-slide-active')) {
        homeSection1.className = 'container';
        homeSection1.classList.add('slide4');
    }
});

// Спойлер (Секция 4)
const spBtn = document.querySelector(".home-section4 button");
spBtn.addEventListener("click", function() {
    this.classList.toggle("_open");
    let spContent = this.parentElement.previousElementSibling;
    if (this.classList.contains("_open")){
        spContent.style.maxHeight = spContent.scrollHeight + "px";
    } else {
        spContent.style.maxHeight = "";
    }
});

// Бургер-меню (моб)
const menuIcon = document.querySelector('.header1__burger-mob');
const menuNav = document.querySelector('.header1__nav');
menuIcon.addEventListener('click', function() {
    wrapper.classList.toggle('_lock');
    menuIcon.classList.toggle('_active');
	menuNav.classList.toggle('_active');
});

// Сдвиг шапки при открытии формы (модального окна)
const header1 = document.querySelector('.header1');
document.querySelector('.home-section1__greeting button').addEventListener('click', function() {
    header1.style.cssText = `padding-right: ${scrollbarWidth}px;`;
});
formCross.addEventListener('click', function() {
    header1.style.cssText = '';
});