function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function getMoveName(choice) {
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
function displayResult(argComputerMove, argPlayerMove) {
	if (argPlayerMove == ``) {
		printMessage(`Unknown move`);
	}
	else if (argComputerMove == argPlayerMove) {
		printMessage('It is a draw Computer move: ' + argComputerMove + `- Player move: ` + argPlayerMove);
	}
	else if( argComputerMove == 'stone' && argPlayerMove == 'paper'){
		printMessage('You win! Computer move: ' + argComputerMove + `- Player move: ` + argPlayerMove);
	} 
	else if( argComputerMove == 'paper' && argPlayerMove == 'scissors'){
		printMessage('You win! Computer move: ' + argComputerMove + `- Player move: ` + argPlayerMove);
	} 
	else if( argComputerMove == 'scissors' && argPlayerMove == 'stone'){
		printMessage('You win! Computer move: ' + argComputerMove + `- Player move: ` + argPlayerMove);
	} 
	else {
		printMessage('You lose! Computer move: ' + argComputerMove + `- Player move: ` + argPlayerMove);  
	}
}