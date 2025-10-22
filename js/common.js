// Появление элементов
if (window.matchMedia("(max-width: 480.9px), (max-height: 480.9px)").matches) {
    var options = {threshold: 0.2};
    var options2 = {threshold: 0.1};
    var options3 = {threshold: 0.3};
}
else {
    options = {threshold: 0.4};
    options2 = {threshold: 0.2};
    options3 = {threshold: 0.7};
}

var callback = function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('_transform');
            if (entry.target.classList.contains('typing-effect')) {
                typeWriter();
            }
            else if (entry.target.classList.contains('counter1')) {
                animateNumber('number-to-animate1', 0, 16, 2000);
                animateNumber('number-to-animate2', 0, 9900, 2000);
                animateNumber('number-to-animate3', 0, 85, 2000);
                animateNumber('number-to-animate4', 0, 5840, 2000);
                animateNumber('number-to-animate5', 0, 150, 2000);
            }
            else if (entry.target.classList.contains('counter2')) {
                animateNumber('number-to-animate1', 0, 16, 2000);
                animateNumber('number-to-animate2', 0, 52, 2000);
                animateNumber('number-to-animate3', 0, 85, 2000);
                animateNumber('number-to-animate4', 0, 198, 2000);
                animateNumber('number-to-animate5', 0, 400, 2000);
            }
            else if (entry.target.classList.contains('counter3')) {
                animateNumber('number-to-animate1', 0, 16, 2000);
                animateNumber('number-to-animate2', 0, 875, 2000);
                animateNumber('number-to-animate3', 0, 85, 2000);
                animateNumber('number-to-animate4', 0, 70, 2000);
                animateNumber('number-to-animate5', 0, 325, 2000);
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
            if (entry2.target.classList.contains('typing-effect')) {
                typeWriter();
            }
            observer2.unobserve(entry2.target);
        }
    });
};
var observer2 = new IntersectionObserver(callback2, options2);
var animItems2 = document.querySelectorAll('.anim-item2');
animItems2.forEach(animItem2 => {
    observer2.observe(animItem2);
});

var callback3 = function(entries3) {
    entries3.forEach(entry3 => {
        if (entry3.isIntersecting) {
            entry3.target.classList.add('_transform');
            observer3.unobserve(entry3.target);
        }
    });
};
var observer3 = new IntersectionObserver(callback3, options3);
var animItems3 = document.querySelectorAll('.anim-item3');
animItems3.forEach(animItem3 => {
    observer3.observe(animItem3);
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

// Меню "Услуги" - появление, исчезновение
const servicesProvidedBtn = document.getElementById('btn-to-open-services-provided');
const servicesProvided = document.querySelector('.services-provided');
servicesProvidedBtn.addEventListener('click', function() {
    servicesProvided.classList.toggle('_visible');
    this.classList.toggle('_active');
});
document.body.addEventListener("click", function(e){
    if (!e.target.closest('.services-provided') && !e.target.closest('#btn-to-open-services-provided') && servicesProvided.classList.contains('_visible')) {
        servicesProvided.classList.remove('_visible');
        servicesProvidedBtn.classList.remove('_active');
    }
});

// Меню "Услуги" - спойлер для 1го уровня
const moreBtns = document.querySelectorAll(".level1-btn");
moreBtns.forEach((moreBtn) => {
    moreBtn.addEventListener("click", function() {
        this.classList.toggle("_open");
        let spContent = this.previousElementSibling;
        if (this.classList.contains("_open")) {
            spContent.style.maxHeight = spContent.scrollHeight + "px";
        } else {
            if (spContent.style.maxHeight == "max-content") {
                spContent.style.maxHeight = spContent.scrollHeight + "px";
                void spContent.offsetHeight;
            }
            spContent.style.maxHeight = "";
        }
    });
});

// Меню "Услуги" - спойлер для 2го уровня
const level2Btns = document.querySelectorAll(".level2-btn");
level2Btns.forEach((level2Btn) => {
    level2Btn.addEventListener("click", function() {
        if (this.parentElement.parentElement.style.maxHeight != "" && this.parentElement.parentElement.style.maxHeight != "max-content") {
            this.parentElement.parentElement.style.maxHeight = "max-content";
        }
        this.classList.toggle("_open");
        let spContent = this.nextElementSibling;
        if (this.classList.contains("_open")) {
            spContent.style.maxHeight = spContent.scrollHeight + "px";
        } else {
            spContent.style.maxHeight = "";
        }
        level2Btns.forEach((anotherLevel2Btn) => {
            let spContent = anotherLevel2Btn.nextElementSibling;
            if (anotherLevel2Btn != this) {
                spContent.style.maxHeight = "";
                anotherLevel2Btn.classList.remove("_open");
            }
        });
    });
});

// Шапка - выпадающие списки
if (window.matchMedia('(hover: none)').matches) {
    // Появление ссылок 1 уровня (ПК)
    const BtnsToOpenLevel1 = document.querySelectorAll('.btn-to-open-level1.pc-btn');
    BtnsToOpenLevel1.forEach((BtnToOpenLevel1) => {
        BtnToOpenLevel1.addEventListener("click", function() {
            this.nextElementSibling.classList.toggle('_visible');
            this.classList.toggle('_active');
            BtnsToOpenLevel1.forEach(AnotherBtnToOpenLevel1 => {
                if (AnotherBtnToOpenLevel1 != this && AnotherBtnToOpenLevel1.nextElementSibling.classList.contains('_visible')) {
                    AnotherBtnToOpenLevel1.nextElementSibling.classList.remove('_visible');
                    AnotherBtnToOpenLevel1.classList.remove('_active');
                }
            });
        });
        document.body.addEventListener("click", function(e){
            if (!e.target.closest('.internal-links__box') && !e.target.closest('.btn-to-open-level1.pc-btn') && BtnToOpenLevel1.nextElementSibling.classList.contains('_visible')) {
                BtnToOpenLevel1.nextElementSibling.classList.remove('_visible');
                BtnToOpenLevel1.classList.remove('_active');
            }
        });
    });
    // Появление ссылок 2 уровня (ПК)
    const BtnsToOpenLevel2 = document.querySelectorAll('.btn-to-open-level2.pc-btn');
    BtnsToOpenLevel2.forEach((BtnToOpenLevel2) => {
        BtnToOpenLevel2.addEventListener("click", function() {
            this.nextElementSibling.classList.toggle('_visible');
            this.classList.toggle('_active');
            BtnsToOpenLevel2.forEach(AnotherBtnToOpenLevel2 => {
                if (AnotherBtnToOpenLevel2 != this && AnotherBtnToOpenLevel2.nextElementSibling.classList.contains('_visible')) {
                    AnotherBtnToOpenLevel2.nextElementSibling.classList.remove('_visible');
                    AnotherBtnToOpenLevel2.classList.remove('_active');
                }
            });
        });
        document.body.addEventListener("click", function(e){
            if (!e.target.closest('.internal-links__box') && !e.target.closest('.btn-to-open-level2.pc-btn') && BtnToOpenLevel2.nextElementSibling.classList.contains('_visible')) {
                BtnToOpenLevel2.nextElementSibling.classList.remove('_visible');
                BtnToOpenLevel2.classList.remove('_active');
            }
        });
    });
}

// Шапка - появление ссылок 1 уровня (моб)
const MobBtnsToOpenLevel1 = document.querySelectorAll(".btn-to-open-level1.mob-btn");
MobBtnsToOpenLevel1.forEach(MobBtnToOpenLevel1 => {
    MobBtnToOpenLevel1.addEventListener("click", function() {
        if (this.parentElement.parentElement.style.maxHeight != "" && this.parentElement.parentElement.style.maxHeight != "max-content") {
            this.parentElement.parentElement.style.maxHeight = "max-content";
        }
        this.classList.toggle("_open");
        let spContent = this.nextElementSibling.nextElementSibling;
        if (this.classList.contains("_open")) {
            spContent.style.maxHeight = spContent.scrollHeight + "px";
        } else {
            if (spContent.style.maxHeight == "max-content") {
                spContent.style.maxHeight = spContent.scrollHeight + "px";
                void spContent.offsetHeight;
            }
            spContent.style.maxHeight = "";
        }
        MobBtnsToOpenLevel1.forEach(AnotherMobBtnToOpenLevel1 => {
            let spContent = AnotherMobBtnToOpenLevel1.nextElementSibling.nextElementSibling;
            if (AnotherMobBtnToOpenLevel1 != this) {
                if (spContent.style.maxHeight == "max-content") {
                    spContent.style.maxHeight = spContent.scrollHeight + "px";
                    void spContent.offsetHeight;
                }
                spContent.style.maxHeight = "";
                AnotherMobBtnToOpenLevel1.classList.remove("_open");
            }
        });
    });
});

// Шапка - появление ссылок 2 уровня (моб)
const MobBtnsToOpenLevel2 = document.querySelectorAll(".btn-to-open-level2.mob-btn");
MobBtnsToOpenLevel2.forEach(MobBtnToOpenLevel2 => {
    MobBtnToOpenLevel2.addEventListener("click", function() {
        if (this.parentElement.parentElement.parentElement.style.maxHeight != "" && this.parentElement.parentElement.parentElement.style.maxHeight != "max-content") {
            this.parentElement.parentElement.parentElement.style.maxHeight = "max-content";
        }
        this.classList.toggle("_open");
        let spContent = this.nextElementSibling.nextElementSibling;
        if (this.classList.contains("_open")) {
            spContent.style.maxHeight = spContent.scrollHeight + "px";
        } else {
            spContent.style.maxHeight = "";
        }
        MobBtnsToOpenLevel2.forEach(AnotherMobBtnToOpenLevel2 => {
            let spContent = AnotherMobBtnToOpenLevel2.nextElementSibling.nextElementSibling;
            if (AnotherMobBtnToOpenLevel2 != this) {
                spContent.style.maxHeight = "";
                AnotherMobBtnToOpenLevel2.classList.remove("_open");
            }
        });
    });
});