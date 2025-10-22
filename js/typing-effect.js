// Эффект "печатающегося" текста
const textToType = document.querySelector('.h3-wrapper span').textContent;
const typingElement = document.querySelector('.h3-wrapper h3');
let charIndex = 0;
function typeWriter() {
    if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}