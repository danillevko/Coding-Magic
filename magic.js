document.addEventListener('DOMContentLoaded', ()=>{
    const welcomeOverlay = document.querySelector('#welcome-overlay');
    const welcomeClose = document.querySelector('#welcome-close');
    const welcomeSave = document.querySelector('#welcome-save');
    const input = document.querySelector('.modal-input');
    const htmlSpan = document.querySelector('.header-span');
    function closeModal(){
        welcomeOverlay.classList.add('hidden');
    }
    welcomeClose.addEventListener('click', ()=>{
        closeModal();
    });
    welcomeSave.addEventListener('click', ()=>{
        const savings = input.value;
        htmlSpan.textContent = savings;
        closeModal();
    });
    welcomeOverlay.addEventListener('click', (event)=>{
        if(event.target === welcomeOverlay){
            closeModal();
        }
    });
});