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
let mouseX = 0;
let mouseY = 0;
socerBall.addEventListener('mouseover', (event)=>{
    let ballPos = socerBall.getBoundingClientRect();
    let fieldPos = socerField.getBoundingClientRect();
    mouseX = event.clientX - fieldPos.left;
    mouseY = event.clientY - fieldPos.top;
    socerBall.style.left = (mouseX - 25) + 'px';
    socerBall.style.top = (mouseY - 25) + 'px';
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


// SCIENTISTS

const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];

const cards = document.querySelector('.cards');
scientists.forEach(scientists => {
    const li = document.createElement('li');
    li.dataset.born = scientists.born;
    li.dataset.dead = scientists.dead;
    li.classList.add('cards-item');
    li.textContent = `${scientists.name} ${scientists.surname} ${scientists.born}-${scientists.dead}`;
    cards.append(li);
});

const cardsItem = document.querySelectorAll('.cards-item');
const quesOne = document.querySelector('#quesOne');
const quesTwo = document.querySelector('#quesTwo');
const quesThree = document.querySelector('#quesThree');
const quesFour = document.querySelector('#quesFour');
const quesFive = document.querySelector('#quesFive');
const quesSix = document.querySelector('#quesSix');
const quesSeven = document.querySelector('#quesSeven');
const quesEight = document.querySelector('#quesEight');
const quesNine = document.querySelector('#quesNine');
// Які вчені народилися в 19 ст.
quesOne.addEventListener('click', () => {
    cardsItem.forEach(li => {
        const born = Number(li.dataset.born);

        if (born >= 1801 && born <= 1900) {
            li.style.border = '2px solid blue';
        } else {
            li.style.backgroundColor = '';
        }
    });
});
// Відсортувати вчених за алфавітом
quesTwo.addEventListener('click', ()=>{
    cardsItem.forEach(li =>{
        const items = Array.from(cardsItem);
        li.dataset.name = li.name;
        items.sort((a, b) => a.textContent.localeCompare(b.textContent));
        cards.innerHTML = '';
        items.forEach(li =>{
            cards.append(li);
        });
    });
});
// Відсортувати вчених за кількістю прожитих років
quesThree.addEventListener('click', ()=>{
    const items = Array.from(cards.children);
    items.sort((a, b) => {
        const yearsA = a.dataset.dead - a.dataset.born;
        const yearsB = b.dataset.dead - b.dataset.born;
        return yearsA - yearsB;
    });
   cards.replaceChildren(...items);
});
// Знайти вченого, який народився найпізніше
quesFour.addEventListener('click', ()=>{
    let latest = cardsItem[0];
    cardsItem.forEach(li =>{
        if(+li.dataset.born > +latest.dataset.born){
            latest = li;
        }
    });
    cardsItem.forEach(li => li.style.border = '');
    latest.style.border = '2px solid blue';
});
// Знайти рік народження Albert Einshtein
quesFive.addEventListener('click', ()=>{
    cardsItem.forEach(li => {
        if(li.textContent.includes('Albert')){
            li.style.border = '2px solid blue';
        } else{
            li.style.border = '';
        }
    })
});
// Знайти вчених, прізвища яких починаються на на літеру “С” 
quesSix.addEventListener('click', ()=>{
    cardsItem.forEach(li =>{
        if(li.textContent.includes('C')){
            li.style.border = '2px solid blue';
        } else{
            li.style.border = '';
        }
    })
})
// Видалити всіх вчених, ім’я яких починається на “А”
quesSeven.addEventListener('click', ()=>{
    cardsItem.forEach(li =>{
        if(li.textContent.includes('A')){
            li.textContent = '';
        }
    })
})
// Знайти вченого, який прожив найдовше і вченого, який прожив найменше
quesEight.addEventListener('click', ()=>{
    let min = cardsItem[0];
    let max = cardsItem[0];
    cardsItem.forEach(li =>{
        const years = li.dataset.dead - li.dataset.born;
        if(years > max.dataset.dead - max.dataset.born){
            max = li;
        };
        if(years < min.dataset.dead - min.dataset.born){
            min = li;
        };
        cardsItem.forEach(li => li.style.border = '');
        max.style.border = '2px solid blue';
        min.style.border = '2px solid blue';
    })
});


// FOOTER

const footerInput = document.querySelector('.footer-email');
const subBtn = document.querySelector('.footer-sub-btn');
subBtn.addEventListener('click', ()=>{
    footerInput.value = null;
});

















// DINO

// const dino = document.querySelector('#dino');
// const cactus = document.querySelector('.cactus');
// document.addEventListener('keydown', (event)=>{
//     if(event.code === "KeyW" || event.code === "ArrowUp"){
//         jump();
//     }
// })
// function jump(){
//     if(!dino.classList.contains('dino-jump')){
//         dino.classList.add('dino-jump');
//     }
//     setTimeout(function(){
//         dino.classList.remove('dino-jump');
//     }, 300);
// };

// let dinoAlive = setInterval(function(){
//     let dinoTop = parseInt(getComputedStyle(dino).top);
//     let cactusLeft = parseInt(getComputedStyle(cactus).left);

//     if (cactusLeft < 150 && cactusLeft > 60 && dinoTop > 100){
//         gameOver.style.display = 'block';

//          cactus.style.animation = 'none';
//          cactus.style.left = '120px';
//     }
// }, 10);

// restartBtn.addEventListener('click', function(){
//     cactus.style.animation = 'cactusMove 1.3s infinite linear';
//     gameOver.style.display = 'none';
// })