//P-1
// for(let i = 0 ; i<= 100 ; i++ ){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//P-2
let gameNum = 18
let guessNum = prompt("Guess the number : ");

    while(gameNum != guessNum){
        guessNum = prompt("That's not correct , Guess Again :")
    }
    console.log("You Guessed it !")
