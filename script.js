'use strict';

let showModal = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

const showFunction = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const hideFunction = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i< showModal.length;i++){
    showModal[i].addEventListener('click',showFunction);
}

closeModal.addEventListener('click',hideFunction);

document.addEventListener('keydown',function(e){
        if(e.key == 'Escape' && !overlay.classList.contains('.hidden')){
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
})