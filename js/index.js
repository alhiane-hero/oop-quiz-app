import Question from './question.js';
import Quiz from './quiz.js';

function populate() {
    if (quiz.isEnded() === true) {
        showScores();
    } else {
        const questionEl = document.getElementById('question');
        questionEl.innerHTML = quiz.getQuestionByIndex().text;

        let choices = quiz.getQuestionByIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            const choiceEl = document.getElementById(`choice${i}`);
            choiceEl.innerHTML = choices[i];
        }
    }
    showProgress();
}

const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener('click', function () {
        let index = parseInt(btn.getAttribute('data-index'));
        let choices = quiz.getQuestionByIndex().choices;
        quiz.guess(choices[index]);
        console.log(choices[index]);
        populate();
    });
});

function showProgress() {
    const progressEl = document.getElementById('progress');
    progressEl.innerHTML = `Question 
    ${quiz.indexOfQuestion} Of 
    ${quiz.questions.length}`;
}

function showScores() {
    document.getElementById('quiz').innerHTML = `
        <h2>Your Score: ${quiz.score}</h2>
    `;
}

const questions = [
    new Question(
        'Which one is not an object oriented programming language?',
        ['Java', 'C#', 'c++', 'C'],
        'C'
    ),
    new Question(
        'Which language is used for styling web pages?',
        ['Html', 'Css', 'Xml', 'JavaScript'],
        'Css'
    ),
    new Question(
        'Ther are ___ main components object oriented programming?',
        ['1', '2', '3', '4'],
        '4'
    ),
    new Question(
        'Which language is used for web apps?',
        ['Php', 'Python', 'JavaScript', 'All'],
        'All'
    ),
    new Question(
        'Mvc is a ___?',
        ['Language', 'Library', 'Framwork', 'Pattern'],
        'Pattern'
    ),
];

const quiz = new Quiz(questions);

populate();