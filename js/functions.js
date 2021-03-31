const printMessage = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
const printResults = function(player, computer){
	let div = document.createElement('div');
	div.innerHTML = "Player: " + player + " - Computer: " + computer ;
	document.getElementById('result').appendChild(div);	
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('result').innerHTML = '';
}
const getMoveName = function(choice) {
	if ( choice == 1 ) {
		return `stone`;
	}
	else if ( choice == 2 ) {
		return `paper`;
	}
	else if ( choice == 3 ) {
		return `scissors`;
	}
}
const displayResult = function(argComputerMove, argPlayerMove) {
	if (argPlayerMove == ``) {
		printMessage(`Unknown move`);
	}
	else if (argComputerMove == argPlayerMove) {
		printMessage('It is a draw Computer move: ' + argComputerMove + `- Player move: ` + argPlayerMove);
	}
	else if( argComputerMove == 'stone' && argPlayerMove == 'paper'){
		playerResult += 1;
		console.log(`playerResult`, playerResult)
		printMessage('You win! Computer move: ' + argComputerMove + `- Player move: ` + argPlayerMove);
	} 
	else if( argComputerMove == 'paper' && argPlayerMove == 'scissors'){
		playerResult += 1;
		printMessage('You win! Computer move: ' + argComputerMove + `- Player move: ` + argPlayerMove);
	} 
	else if( argComputerMove == 'scissors' && argPlayerMove == 'stone'){
		playerResult += 1;
		printMessage('You win! Computer move: ' + argComputerMove + `- Player move: ` + argPlayerMove);
	} 
	else {
		computerResult += 1;
		printMessage('You lose! Computer move: ' + argComputerMove + `- Player move: ` + argPlayerMove);  
	}
}
const playGame = function(playerNumber) {
	clearMessages();
	let randomNumber = Math.floor(Math.random()*3+1);
	let computerMove = getMoveName(randomNumber);
	// if ( randomNumber == 1 ) {
	//     computerMove = `stone`;
	// }
	// else if ( randomNumber == 2 ) {
	//     computerMove = `paper`;
	// }
	// else if ( randomNumber == 3 ) {
	//     computerMove = `scissors`;
	// }
	// console.log(computerMove);
	// let playerAnswer = prompt( `Choose a number 1-stone 2-paper 3-scissors` );
	let playerMove = getMoveName(playerNumber);
	// if ( playerAnswer == 1 ) {
	//     playerMove = `stone`;
	// }
	// else if ( playerAnswer == 2 ) {
	//     playerMove = `paper`;
	// }
	// else if ( playerAnswer == 3 ) {
	//     playerMove = `scissors`;
	// }
	// console.log(playerMove);
	displayResult(computerMove, playerMove);
	printResults(playerResult, computerResult);

}