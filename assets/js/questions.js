//1. Create an object of questions
let questions = {
    1: {
        question:"Inside which HTML element do we put the JavaScript?",
        choices: [
            "<scripting>",
            "<js>",
            "<script>",
            "<javascript>"
        ],
        answer: "<script>"
    },
    2: {
        question:"What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>" ,
        choices: [
            "document.getElement('p').innerHTML = 'Hello World!'",
            "#demo.innerHTML = 'Hello World!'",
            "document.getElementByName('p').innerHTML = 'Hello World!'",
            "document.getElementById('demo').innerHTML = 'Hello World!'"
        ],
        answer: "document.getElementById('demo').innerHTML = 'Hello World!'"
    }
};
//2. Load questions to local storage when start button is clicked.
let startQuiz = document.querySelector('#start');
startQuiz.addEventListener('click', function(event) {
    event.preventDefault(); 
    localStorage.setItem("questions", JSON.stringify(questions));
    localStorage.setItem("totalQuestions", Object.keys(questions).length);
})