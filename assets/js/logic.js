//Get number of questions from the local storage and multiply by 30 seconds.
let timerlimit = parseInt(localStorage.getItem("totalQuestions"));
timerlimit *= 30;

//Set timer to the result from step 3 and start counting down.
let timerElement = document.querySelector("#time");
let timer;
let isQuizCompleted = false
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
        timerlimit--;
        timerElement.textContent = timerlimit;
        if (timerlimit >= 0) {
            // Tests if all questions are answered
            if (isQuizCompleted && timerlimit > 0) {
                // Clears interval and stops timer
                clearInterval(timer);
            }
        }
        // Tests if time has run out
        if (timerlimit === 0) {
            // Clears interval
            clearInterval(timer);
        }
    }, 1000);
}

//Add a 'click' eventlistener to the start button.
let questionsFromStorage = JSON.parse(localStorage.getItem("questions"));
let firstQuestionKey = Object.keys(questionsFromStorage)[0];
let firstQuestion = questionsFromStorage.firstQuestionKey;
// console.log(firstQuestion);

//Hide the start screen and load the first question from memory.
let startScreen = document.querySelector("#start-screen");
let questionsSection = document.querySelector("#questions");
let questionsSectionHeading = document.querySelector("#question-title");

startQuiz.addEventListener('click', function(event) {
    event.preventDefault(); 
    timerElement.textContent = timerlimit;
    startScreen.setAttribute("class", "hide");
    questionsSection.setAttribute("class", "start")
    questionsSectionHeading.textContent = firstQuestion;
    startTimer();
})

//5.  Get the first question from local storage.
//6.  Set the content of the page to the first question along with its choices.
//7.  Add 'click' eventlisteners to the choices.
//8.  Get the correct answer to the question from local storage.
//9.  If the clicked choice is the same as the data from step 8:
//     - Display 'Correct'.
//     - Increment score by 10.
//     - Move on to the next question.
//10. If the clicked choice is not the same as the data from step 8:
//     - Display 'Wrong'.
//     - Decrement the timer by 10 seconds.
//     - Move on to the next question
//11. If timer is zero or all questions have been attempted.
//    - End quiz
//12. Display score and prompt user to submit their initials and score.