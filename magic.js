// document.addEventListener('DOMContentLoaded', ()=>{
//     // MODAL
//     const welcomeOverlay = document.querySelector('#welcome-overlay');
//     const welcomeClose = document.querySelector('#welcome-close');
//     const welcomeSave = document.querySelector('#welcome-save');
//     const input = document.querySelector('.modal-input');
//     const htmlSpan = document.querySelector('.header-span');
//     welcomeOverlay.classList.remove('hidden');

//     function closeModal(){
//         welcomeOverlay.classList.add('hidden');
//     }
//     welcomeClose.addEventListener('click', ()=>{
//         closeModal();
//     });
//     welcomeSave.addEventListener('click', ()=>{
//         const savings = input.value;
//         htmlSpan.textContent = `Вітаємо, ${savings}!`;
//         closeModal();
//     });
//     welcomeOverlay.addEventListener('click', (event)=>{
//         if(event.target === welcomeOverlay){
//             closeModal();
//         }
//     });
// });

// MORE
document.addEventListener('DOMContentLoaded', ()=>{
    const btnMore = document.querySelector('#btn-more');
    const listMore = document.querySelector('#list-more');

    btnMore.addEventListener('click', ()=>{
        listMore.classList.toggle('hidden');
    })
});

// YEAR GAME
const btnFinder = document.getElementById('year-btn-submit');
const inputText = document.querySelector('.year-num-text');
const spanResult = document.querySelector('#year-result');
btnFinder.addEventListener('click', ()=>{
    const year = Number(inputText.value);
    if(year % 4 === 0){
        spanResult.textContent = 'Ви народилися у високосний рік!';
        spanResult.style.color = 'green';
    } else{
        spanResult.textContent = 'Ви народилися не у високосний рік!';
        spanResult.style.color = 'red';
    }
});

// NUMBER

const btnFinderNum = document.getElementById('num-btn-submit');
const inputTextNum = document.querySelector('#num-text-input');
const spanResultNum = document.querySelector('#num-result');
btnFinderNum.addEventListener('click', ()=>{
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    let num = Number(inputTextNum.value);
    if(num === randomNumber){
        spanResultNum.textContent = `Вітаю, ви вгадали число! ${randomNumber} `;
        spanResultNum.style.color = 'green';
    } else{
        spanResultNum.textContent = `Ви програли, комп’ютер загадав ${randomNumber} `;
        spanResultNum.style.color = 'red';
    }
})

// RPS

const btnRps = document.querySelectorAll('#btn-rps');
const resultRps = document.querySelector('#rps-result');
const mainScore = document.querySelector('#main-score');
const pcScore = document.querySelector('#pc-score');
const humanScore = document.querySelector('#human-score');
const variables = {rock:'scissors', scissors:'paper', paper:'rock'};
