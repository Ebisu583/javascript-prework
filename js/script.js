let randomNumber = Math.floor(Math.random()*3+1);
let computerMove = ``;
if ( randomNumber == 1 ) {
    computerMove = `stone`;
}
else if ( randomNumber == 2 ) {
    computerMove = `paper`;
}
else if ( randomNumber == 3 ) {
    computerMove = `scissors`;
}
console.log(computerMove);
let playerAnswer = prompt( `Choose a number 1-stone 2-scissors 3-paper` );
let playerMove = ``;
if ( playerAnswer == 1 ) {
    playerrMove = `stone`;
}
else if ( playerAnswer == 2 ) {
    playerMove = `paper`;
}
else if ( playerAnswer == 3 ) {
    playerMove = `scissors`;
}
console.log(playerMove);