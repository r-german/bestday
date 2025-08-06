// Модальное окно для пакетов услуг
const modalWindowForServices = document.getElementById('modal-window-for-services');
const servicePackageBtns = document.querySelectorAll('.service-package__description button');
const etude = document.getElementById('etude');
const novella = document.getElementById('novella');
const poem = document.getElementById('poem');
const turnkey = document.getElementById('turnkey');

servicePackageBtns.forEach((servicePackageBtn) => {
    servicePackageBtn.addEventListener('click', function() {
        body.classList.add('_lock');
        wrapper.style.cssText = `padding-right: ${scrollbarWidth}px;`;
        modalWindowForServices.style.cssText = `padding-right: ${scrollbarWidth}px;`;
        modalWindowForServices.classList.add('_visible');
        if (servicePackageBtn.classList.contains('etude-btn')) {
            etude.style.display = 'block';
        }
        else if (servicePackageBtn.classList.contains('novella-btn')) {
            novella.style.display = 'block';
        }
        else if (servicePackageBtn.classList.contains('poem-btn')) {
            poem.style.display = 'block';
        }
        else if (servicePackageBtn.classList.contains('turnkey-btn')) {
            turnkey.style.display = 'block';
        }
    });
});

document.querySelector('.service-list-wrapper__cross').addEventListener('click', function() {
    body.classList.remove('_lock');
    wrapper.style.cssText = '';
    modalWindowForServices.style.cssText = '';
    modalWindowForServices.classList.remove('_visible');
    setTimeout(function() {
        if (etude.style.display == 'block') {
            etude.style.display = '';
        }
        else if (novella.style.display == 'block') {
            novella.style.display = '';
        }
        else if (poem.style.display == 'block') {
            poem.style.display = '';
        }
        else if (turnkey.style.display == 'block') {
            turnkey.style.display = '';
        }
    }, 300);
});

document.querySelector('.modal-window__service-list-wrapper button').addEventListener('click', function() {
    modalWindowForServices.classList.remove('_visible');
    setTimeout(function() {
        modalWindowForServices.style.cssText = '';
        if (etude.style.display == 'block') {
            etude.style.display = '';
        }
        else if (novella.style.display == 'block') {
            novella.style.display = '';
        }
        else if (poem.style.display == 'block') {
            poem.style.display = '';
        }
        else if (turnkey.style.display == 'block') {
            turnkey.style.display = '';
        }
    }, 300);
});