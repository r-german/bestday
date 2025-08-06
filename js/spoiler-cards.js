// Текст появляется при нажатии на карточку
const spoilerCardTitles = document.querySelectorAll('.spoiler-card h5');
spoilerCardTitles.forEach((spoilerCardTitle) => {
    spoilerCardTitle.parentElement.addEventListener("click", function() {
        this.classList.toggle("_open");
        let spContent = spoilerCardTitle.nextElementSibling;
        if (this.classList.contains("_open")){
            spContent.style.maxHeight = spContent.scrollHeight + "px";
        } else {
            spContent.style.maxHeight = "";
        }
        spoilerCardTitles.forEach(anotherSpoilerCardTitle => {
            let spContent = anotherSpoilerCardTitle.nextElementSibling;
            if (anotherSpoilerCardTitle.parentElement != this) {
                spContent.style.maxHeight = "";
                anotherSpoilerCardTitle.parentElement.classList.remove("_open");
            }
        });
    });
});