'use strict'

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function toggleModal() {
    const elModal =  document.querySelector('.modal')
    elModal.classList.toggle('hidden')
    document.body.classList.toggle('modal-open')
}
