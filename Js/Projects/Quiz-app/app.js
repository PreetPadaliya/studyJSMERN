const quetions = [
    {
        question:"What is full form of HTML?",
        answers:[
            {text:"Hyper Text Markup Language", correct:true},
            {text:"Hyper Text Makeup Language", correct:false},
            {text:"Hydro Text Markover Language", correct:false},
            {text:"Hyper Text Markup Level", correct:false},
        ]
    },
    {
        question:"What is full form of CSS?",
        answers:[
            {text:"Cascading Style Sheets", correct:true},
            {text:"Computer Style Sheets", correct:false},
            {text:"Colorful Style Sheets", correct:false},
            {text:"Complete Style Sheets", correct:false}
        ]
    },
    {
        question:"What is full form of JS?",
        answers:[
            {text:"JavaScript", correct:true},
            {text:"Java Style", correct:false},
            {text:"Just Script", correct:false},
            {text:"Job Script", correct:false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = quetions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        button.addEventListener("click", selectAnswer);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);

    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
 
nextButton.addEventListener("click", () => {
    if(nextButton.innerHTML === "Play Again"){
        startQuiz();
    }
    else{
        currentQuestionIndex++;
        if(currentQuestionIndex < quetions.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }
});

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${quetions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


startQuiz();