function rockPaperScissors(userInput, compInput, lose, win, tie){
    userInput = userInput.toLowerCase();
    
    if(userInput === compInput){
        console.log("Tie!");
        console.log("You chose " + userInput + " and the computer picked " + compInput + " as well.");
        tie = tie + 1;
    } else if(userInput === "paper" && compInput === "rock"){
        console.log("You win!");
        console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
        win = win + 1;
    } else if(userInput === "rock" && compInput === "scissors"){
        console.log("You win!");
        console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
        win = win + 1;
    } else if(userInput === "scissors" && compInput === "paper"){
        console.log("You win!");
        console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
        win = win + 1;
    } else {
        console.log("You lost!");
        console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
        lose = lose + 1;
    }
}



let chars = [ "rock", "paper", "scissors" ];
let lose = 0;
let win = 0;
let tie = 0;

for(let i = 0; i < 5; i++){
let input = prompt("Rock, paper, or scissors?");
let comp = chars[Math.floor(Math.random() * chars.length)];
rockPaperScissors(input, comp, lose, win, tie);
console.log("You won: " + win + ". You lost: " + lose + ". And you tied: " + tie + ".");
}
