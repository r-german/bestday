// Бургер-меню (моб)
const header2Burger = document.querySelector('.header2__burger');
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