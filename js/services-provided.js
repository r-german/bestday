// Появление меню "Услуги"
const servicesProvidedBtn = document.querySelector('.services-provided-btn');
const servicesProvided = document.querySelector('.services-provided');
servicesProvidedBtn.addEventListener('click', function() {
    servicesProvided.classList.toggle('_visible');
});
document.body.addEventListener("click", function(e){
    if (!e.target.closest('.services-provided') && !e.target.closest('.services-provided-btn') && servicesProvided.classList.contains('_visible')) {
        servicesProvided.classList.remove('_visible');
    }
});

// Спойлер "Ещё (Уровень1)"
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

// Спойлер "Уровень2"
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