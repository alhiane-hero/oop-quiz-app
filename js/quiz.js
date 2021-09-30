// function Quiz(questions) {
//     this.score = 0;
//     this.questions = questions;
//     this.questionIndex = 0;
// }

// Quiz.prototype.getQuestionByIndex = function() {
//     return this.questions[this.questionIndex];
// }

// Quiz.prototype.isEnded = function() {
//     return this.questions.length === this.questionIndex;
// }

// Quiz.prototype.guess = function(answer) {
//     if (this.getQuestionByIndex().correctAnswer(answer)) {
//         this.score++;
//     }
//     this.questionIndex++;
// }

class Quiz {
    constructor (questions) {
        this.score = 0;
        this.indexOfQuestion = 0;
        this.questions = questions;
    }

    getQuestionByIndex() {
        return this.questions[this.indexOfQuestion];
    }

    isEnded() {
        return this.questions.length === this.indexOfQuestion;
    }

    guess(guess) {
        if (this.getQuestionByIndex().correctAnswer(guess)) {
            this.score++;
        }
        this.indexOfQuestion++;
    }
}

export default Quiz;