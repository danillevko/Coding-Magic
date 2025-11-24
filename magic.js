document.addEventListener('DOMContentLoaded', ()=>{
    // MODAL
    const welcomeOverlay = document.querySelector('#welcome-overlay');
    const welcomeClose = document.querySelector('#welcome-close');
    const welcomeSave = document.querySelector('#welcome-save');
    const input = document.querySelector('.modal-input');
    const htmlSpan = document.querySelector('.header-span');
    welcomeOverlay.classList.remove('hidden');

    function closeModal(){
        welcomeOverlay.classList.add('hidden');
    }
    welcomeClose.addEventListener('click', ()=>{
        closeModal();
    });
    welcomeSave.addEventListener('click', ()=>{
        const savings = input.value;
        htmlSpan.textContent = `Вітаємо, ${savings}!`;
        closeModal();
    });
    welcomeOverlay.addEventListener('click', (event)=>{
        if(event.target === welcomeOverlay){
            closeModal();
        }
    });
});
document.addEventListener('DOMContentLoaded', ()=>{
    // MORE
    const btnMore = document.querySelector('#btn-more');
    const listMore = document.querySelector('#list-more');

    btnMore.addEventListener('click', ()=>{
        listMore.classList.toggle('hidden');
    })
});