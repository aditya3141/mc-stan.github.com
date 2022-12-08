'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnOpen = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal');

// Now start the code

for(let i = 0; i < btnOpen.length; i++){
    // when user click the button
    const openModal = function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };
    // call function
    btnOpen[i].addEventListener('click', openModal);

    // when user click the close button
    const closeModal = function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    //call function
    btnClose.addEventListener('click', closeModal);

    // user click outside the box
    overlay.addEventListener('click', closeModal);
}