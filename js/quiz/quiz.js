let optionElements = document.querySelectorAll('.input-option');

let question = document.getElementById('question-quiz');
let numberQuestion = document.getElementById('number-of-question');
let numberAllQuestion = document.getElementById('number-all-of-question');

let indexQuestion;
let indexPage = 0;

let btnNext = document.querySelector('.btn-next');

let questions = [
    {
        question: 'Вы любите контролировать других людей и вести учет?',
    },
    {
        question: 'Вы любите хлеб?',
    },
    {
        question: 'Вы любите свою половинку?'
    },
];

numberAllQuestion.innerHTML = questions.length;

const load = () => {
    question.innerHTML = questions[indexQuestion].question;

    numberQuestion.innerHTML = indexPage + 1;
    indexPage++;
}

let completedAnswers = [];

const randomQuestions = () => {
    let randomNamber = Math.floor(Math.random() * questions.length);
    let hitDublicate = false;

    if(indexPage == questions.length) {
        quizOver();
    } else {
        if(completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if( item == randomNamber) {
                    hitDublicate = true;
                }
            });
            if(hitDublicate) {
                randomQuestions();
            } else {
                indexQuestion = randomNamber;
                load();
            }
        };
        if(completedAnswers == 0) {
            indexQuestion = randomNamber;
            load();
        }
    };
    completedAnswers.push(indexQuestion);
};

const checkAnswer = el => {
    disabledOptions();
}

const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
    });
};

const enableOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled');
        item.checked = false;
    });
};

const validate = () => {
    if(!optionElements[0].classList.contains('disabled')) {
        alert('Выбери один из вариантов');
    } else {
        randomQuestions();
        enableOptions();
    }
}

btnNext.addEventListener('click', () => {
    validate();
});

for(option of optionElements) {
    option.addEventListener('click', e => checkAnswer(e));
}

let btnClose = document.querySelector('.close-end__quiz');
let windowEnd = document.querySelector('.block-item__end-quiz');

const quizOver = () => {
    windowEnd.classList.add('active-end__quiz');
}

btnClose.addEventListener('click', function() {
    windowEnd.classList.remove('active-end__quiz');
})

window.addEventListener('load', () => {
    randomQuestions();
});