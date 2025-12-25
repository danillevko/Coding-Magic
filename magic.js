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
const pcScore = document.querySelector('#pc-score');
const humanScore = document.querySelector('#human-score');
const pcVariableBtn = document.querySelector('#pc-variable');
const variables = {rock:'scissors', scissors:'paper', paper:'rock'};
let pcChoise = null;
let humanChoise = null;
let pcNumber = 0;
let humanNumber = 0;
btnRps.forEach(element => {
    element.addEventListener('click', ()=>{
        humanChoise = element.dataset.type;
    });
});
pcVariableBtn.addEventListener('click', ()=>{
    if(!humanChoise){
        resultRps.textContent = 'Зробіть свій вибір спочатку!';
        resultRps.style.color = 'grey';
        return
    }
    let variablesKeys = Object.keys(variables);
    let randomChoise = Math.floor(Math.random() * variablesKeys.length);
    pcChoise = variablesKeys[randomChoise];
    pcVariableBtn.textContent = pcChoise;
    if(pcChoise === humanChoise){
        resultRps.textContent = 'Нічия';
        resultRps.style.color = 'grey';
    } else if(variables[humanChoise] === pcChoise){
        humanNumber++
        humanScore.textContent = humanNumber;
        resultRps.textContent = 'Ви виграли раунд!';
        resultRps.style.color = 'green';
    } else{
        pcNumber++
        pcScore.textContent = pcNumber;
        resultRps.textContent = 'Комп’ютер виграв раунд!';
        resultRps.style.color = 'red';
    }
    humanChoise = null;
});

// CALC

const numOne = document.querySelector('#num-one');
const numTwo = document.querySelector('#num-two');
const calcResult = document.querySelector('#result');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equals = document.querySelector('#equals');
let currentOperator = null;
plus.addEventListener('click', () => {
    currentOperator = '+';
});
minus.addEventListener('click', () => {
    currentOperator = '-';
});
multiply.addEventListener('click', () => {
    currentOperator = '*';
});
divide.addEventListener('click', () => {
    currentOperator = '/';
});
equals.addEventListener('click', () => {
    const a = Number(numOne.value);
    const b = Number(numTwo.value);
    let number;
    if(currentOperator === '+'){
        number = a + b;
    } else if(currentOperator === '-'){
        number = a - b;
    } else if(currentOperator === '*'){
        number = a * b;
    } else if(currentOperator === '/'){
        number = a / b;
    }
    calcResult.value = number;
});

// TIME CALC

const timeBtn = document.querySelector('#time-btn');
const timeInput = document.querySelector('#time-input');
const timeResult = document.querySelector('#time-result');
timeBtn.addEventListener('click', ()=>{
    const sec = Number(timeInput.value);
    const days = Math.floor(sec / 86400);
    const hours = Math.floor((sec % 86400) / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = Math.floor(sec % 60);
    timeResult.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
})



// SOCER


const socerBall = document.querySelector('#socer-ball');
const socerField = document.querySelector('#socer-field');
socerBall.addEventListener('mouseover', ()=>{
    let ballPos = socerBall.getBoundingClientRect();
    let fieldPos = socerField.getBoundingClientRect();
})


// BIGGEST NUM

const biggestNum = document.querySelectorAll('.three-nums');
const biggestNumResult = document.querySelector('#three-nums-result');
const biggestNumBtn = document.querySelector('#three-num-btn');
biggestNumBtn.addEventListener('click', ()=>{
    let a = Number(biggestNum[0].value);
    let b = Number(biggestNum[1].value);
    let c = Number(biggestNum[2].value);
    let biggest = a;
    if(b > biggest){
        biggest = b;
    }
    if(c > biggest){
        biggest = c;
    }
    biggestNumResult.textContent = `Найбільше число, яке ви ввели - ${biggest}`;
});


// SLIDER
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
let slideNum = 0;
nextBtn.addEventListener('click', ()=>{
    slideNum = (slideNum + 1) % slides.length;
    track.style.transform = `translateX(-${slideNum * 628}px)`;
})
prevBtn.addEventListener('click', ()=>{
    slideNum = (slideNum - 1 + slides.length) % slides.length;
    track.style.transform = `translateX(-${slideNum * 628}px)`;
});


// FOOTER

const footerInput = document.querySelector('.footer-email');
const subBtn = document.querySelector('.footer-sub-btn');
subBtn.addEventListener('click', ()=>{
    footerInput.value = null;
})

















// DINO

const dino = document.querySelector('#dino');
const cactus = document.querySelector('.cactus');
document.addEventListener('keydown', (event)=>{
    if(event.code === "KeyW" || event.code === "ArrowUp"){
        jump();
    }
})
function jump(){
    if(!dino.classList.contains('dino-jump')){
        dino.classList.add('dino-jump');
    }
    setTimeout(function(){
        dino.classList.remove('dino-jump');
    }, 300);
};

let dinoAlive = setInterval(function(){
    let dinoTop = parseInt(getComputedStyle(dino).top);
    let cactusLeft = parseInt(getComputedStyle(cactus).left);

    if (cactusLeft < 150 && cactusLeft > 60 && dinoTop > 100){
        gameOver.style.display = 'block';

         cactus.style.animation = 'none';
         cactus.style.left = '120px';
    }
}, 10);

restartBtn.addEventListener('click', function(){
    cactus.style.animation = 'cactusMove 1.3s infinite linear';
    gameOver.style.display = 'none';
})