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
    playerMove = `stone`;
}
else if ( playerAnswer == 2 ) {
    playerMove = `paper`;
}
else if ( playerAnswer == 3 ) {
    playerMove = `scissors`;
}
console.log(playerMove);
if (playerMove == ``) {
    printMessage(`Unknown move`);
}
else if (computerMove == playerMove) {
    printMessage('It is a draw Computer move: ' + computerMove + `- Player move: ` + playerMove);
}
else if( computerMove == 'stone' && playerMove == 'paper'){
    printMessage('You win! Computer move: ' + computerMove + `- Player move: ` + playerMove);
} 
else if( computerMove == 'paper' && playerMove == 'scissors'){
    printMessage('You win! Computer move: ' + computerMove + `- Player move: ` + playerMove);
} 
else if( computerMove == 'scissors' && playerMove == 'stone'){
    printMessage('You win! Computer move: ' + computerMove + `- Player move: ` + playerMove);
} 
else {
    printMessage('You lose! Computer move: ' + computerMove + `- Player move: ` + playerMove);  
}
