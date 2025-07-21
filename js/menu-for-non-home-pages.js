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
        header2Nav.style.maxHeight = "";
    }
});