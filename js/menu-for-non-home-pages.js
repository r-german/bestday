// Бургер-меню (ПК)
const firstScreenBurger = document.querySelector('.first-screen__burger');
// const menuNav = document.querySelector('.header__nav');
firstScreenBurger.addEventListener('click', function() {
    body.classList.toggle('_lock');
    firstScreenBurger.classList.toggle('_active');
	// menuNav.classList.toggle('_active');
    if (this.classList.contains('_active')) {
        wrapper.style.cssText = `padding-right: ${scrollbarWidth}px;`;
    }
    else {
        wrapper.style.cssText = '';
    }
});

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

// Бургер-меню (моб)
const header2Burger = document.querySelector('.header2__burger-box');
const header2Nav = document.querySelector('.header2 nav');
header2Burger.addEventListener('click', function() {
    header2Burger.classList.toggle('_active');
	header2Nav.parentElement.classList.toggle('_active');
    if (this.classList.contains('_active')) {
        header2Nav.style.maxHeight = header2Nav.scrollHeight + "px";
    }
    else {
        if (header2Nav.style.maxHeight == "max-content") {
            header2Nav.style.maxHeight = header2Nav.scrollHeight + "px";
            void header2Nav.offsetHeight;
        }
        header2Nav.style.maxHeight = "";
    }
});

// Появление ссылок 1 уровня (моб)
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

// Появление ссылок 2 уровня (моб)
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