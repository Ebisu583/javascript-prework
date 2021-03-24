// playGame(3);
const rock = document.getElementById("play-rock");
const paper = document.getElementById("play-paper");
const scissors = document.getElementById("play-scissors")
rock.addEventListener(`click`,function(){
    playGame(1);
})
paper.addEventListener(`click`,function(){
    playGame(2);
})
scissors.addEventListener(`click`,function(){
    playGame(3);
})