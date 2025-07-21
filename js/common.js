// Появление элементов
if (window.matchMedia("(max-height: 480.9px)").matches) {
    var options = {threshold: 0.2};
    var options2 = {threshold: 0.1};
}
else {
    options = {threshold: 0.4};
    options2 = {threshold: 0.2};
}

var callback = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('_transform');
            if (entry.target.classList.contains('typing-effect')) {
                typeWriter();
            }
            else if (entry.target.parentElement.classList.contains('about-company-section3')) {
                animateNumber('number-to-animate1', 0, 16, 2000);
                animateNumber('number-to-animate2', 0, 9900, 2000);
                animateNumber('number-to-animate3', 0, 85, 2000);
                animateNumber('number-to-animate4', 0, 5840, 2000);
                animateNumber('number-to-animate5', 0, 150, 2000);
            }
            observer.unobserve(entry.target);
        }
    });
};
var observer = new IntersectionObserver(callback, options);
var animItems = document.querySelectorAll('.anim-item');
animItems.forEach(animItem => {
    observer.observe(animItem);
});

var callback2 = function(entries2) {
    entries2.forEach(entry2 => {
        if (entry2.isIntersecting) {
            entry2.target.classList.add('_transform');
            observer2.unobserve(entry2.target);
        }
    });
};
var observer2 = new IntersectionObserver(callback2, options2);
var animItems2 = document.querySelectorAll('.anim-item2');
animItems2.forEach(animItem2 => {
    observer2.observe(animItem2);
});

// Полоса прокрутки
let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
window.addEventListener("resize", function() {
    scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
});

// Модальное окно для формы
const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const modalWindowForForm = document.getElementById('modal-window-for-form');
const formOpenBtns = document.querySelectorAll('.form-open-btn');
formOpenBtns.forEach((formOpenBtn) => {
    formOpenBtn.addEventListener('click', function() {
        body.classList.add('_lock');
        wrapper.style.cssText = `padding-right: ${scrollbarWidth}px;`;
        modalWindowForForm.style.cssText = `padding-right: ${scrollbarWidth}px;`;
        modalWindowForForm.classList.add('_visible');
    });
});
const formCross = document.querySelector('.form-wrapper__cross');
formCross.addEventListener('click', function() {
    body.classList.remove('_lock');
    wrapper.style.cssText = '';
    modalWindowForForm.style.cssText = '';
    modalWindowForForm.classList.remove('_visible');
});