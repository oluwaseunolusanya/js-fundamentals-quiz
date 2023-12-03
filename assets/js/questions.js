//1. Create an object of questions
let questions = {
    question: 'Inside which HTML element do we put the JavaScript?',
    choices: [
        '<scripting>',
        '<js>',
        '<script>',
        '<javascript>'
    ],
    answer: '<script>'
};
//2. Load questions to local storage when start button is clicked.
let startButton = document.querySelector('#submit');
startButton.addEventListener('click', function(event) {
    event.preventDefault();  
    localStorage.setItem("questions", JSON.stringify(questions));
})