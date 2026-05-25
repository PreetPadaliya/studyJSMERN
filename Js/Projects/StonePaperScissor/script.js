let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScoreCount = document.querySelector("#user-score");
const compChoiceCount = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["stone","paper","scissor"];
    const randIndex = Math.floor(Math.random()*3);
    return options[randIndex];
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        console.log("You Won !");
        msg.innerText = `You won ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreCount.innerText = userScore;
    }
    else{
        console.log("You Lose !");
        msg.innerText = `You loose ! Comp's ${compChoice} beats ${userChoice} `;
        msg.style.backgroundColor = "red";
        computerScore++;
        compChoiceCount.innerText = computerScore;
    }
};

const drawGame = () => {
    console.log("game was draw.")
    msg.innerText = "Draw !"
    msg.style.backgroundColor = "#081b31"
}
const playGame = (userChoice) => {
    console.log("user choice =",userChoice)
    const compChoice = genCompChoice();
    console.log("computer choice =",compChoice);

    if(userChoice == compChoice){
        drawGame(); 
    } 
    else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true; 
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice); 
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})