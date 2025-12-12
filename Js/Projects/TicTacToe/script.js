let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-btn");


let turnO = true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner()
    });
});

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}
const disabledBoxes = ()=>{
    boxes.forEach((box)=>{
        box.disabled = true;
    });
}
const enabledBoxes = ()=>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
    });
}

const checkWinner =()=>{
    for(let pattern of winPattern){
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;
       if(pos1Val != "" && pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val); 
       }    
    }
};

const showWinner = (winner) => {
    msg.innerText = `${winner} has won the Game!`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);