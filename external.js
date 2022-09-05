function rockPaperScissors(userInput, compInput){
    userInput = userInput.toLowerCase();
    
    if(userInput === compInput){
        console.log("Tie!");
        console.log("You chose " + userInput + " and the computer picked " + compInput + " as well.");
    } else if(userInput === "paper" && compInput === "rock"){
        console.log("You win!");
        console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
    } else if(userInput === "rock" && compInput === "scissors"){
        console.log("You win!");
        console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
    } else if(userInput === "scissors" && compInput === "paper"){
        console.log("You win!");
        console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
    } else {
        console.log("You lost!");
        console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
    }
}

let input = prompt("Rock, paper, or scissors?");
let chars = [ "rock", "paper", "scissors" ];
let comp = chars[Math.floor(Math.random() * chars.length)];

rockPaperScissors(input, comp);