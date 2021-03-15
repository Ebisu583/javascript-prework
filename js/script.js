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