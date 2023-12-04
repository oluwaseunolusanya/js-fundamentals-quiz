//1. Create an object of questions
let questions = {
    one: {
        question:"Inside which HTML element do we put the JavaScript?",
        choices: [
            "<scripting>",
            "<js>",
            "<script>",
            "<javascript>"
        ],
        answer: "<script>"
    },
    two: {
        question:"What is the correct JavaScript syntax to change the content of the HTML element?\r\n<p id='demo'>This is a demonstration.</p>" ,
        choices: [
            "document.getElement('p').innerHTML = 'Hello World!'",
            "#demo.innerHTML = 'Hello World!'",
            "document.getElementByName('p').innerHTML = 'Hello World!'",
            "document.getElementById('demo').innerHTML = 'Hello World!'"
        ],
        answer: "document.getElementById('demo').innerHTML = 'Hello World!'"
    }
};

let totalQuestions = Object.keys(questions).length;