let lose = 0;
let win = 0;
let tie = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// shows what you and the computer picked
const choiceContainer = document.querySelector('#choices');
let choice = document.createElement('div');
choice.classList.add('choice');

//displays the results at the end of the game
const resultContainer = document.querySelector('#results');
let result = document.createElement('div');
result.classList.add('result');

// displays the amount of wins in a game
const winContainer = document.querySelector('#win');
let winner = document.createElement('div');
winner.classList.add('winner');
winner.textContent = 'You\'ve won: ' + win;
winContainer.appendChild(winner);

// displays the amount of losses in a game
const lossContainer = document.querySelector('#loss');
let loser = document.createElement('div');
loser.classList.add('loser');
loser.textContent = 'You\'ve lost: ' + lose;
lossContainer.appendChild(loser);

// displays the amount of ties in a game
const tieContainer = document.querySelector('#tie');
let tied = document.createElement('div');
tied.classList.add('tied');
tied.textContent = 'You\'ve tied: ' + tie;
tieContainer.appendChild(tied);

//displays the reset button after a win or loss is declared
const resetContainer = document.querySelector('#retry');
const reset = document.createElement('button');
reset.textContent = "Restart?";
reset.style.backgroundColor = 'crimson';
reset.style.borderRadius = '16px';
reset.style.border = '3px solid black';
reset.style.color = 'black';
reset.addEventListener('click', () => restart())

// the computer picks it's choice
function compPick() {
    let randomNumber = Math.floor(Math.random() *  3);
    if(randomNumber == 0) {
        return 'rock';
    } else if(randomNumber == 1) {
        return 'paper';
    } else{
        return 'scissors';
    }
}


// starts the game and monitors it
function rockPaperScissors(userInput, compInput){
    userInput = userInput.toLowerCase();

    if(win < 5 && lose < 5){
        if(userInput === compInput){
            console.log("Tie!");
            console.log("You chose " + userInput + " and the computer picked " + compInput + " as well.");
            tie = tie + 1;
            tied.textContent = 'You\'ve tied: ' + tie;
            
        } else if(userInput === "paper" && compInput === "rock"){
            console.log("You win!");
            console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
            win = win + 1;
            winner.textContent = 'You\'ve won: ' + win;
            
        } else if(userInput === "rock" && compInput === "scissors"){
            console.log("You win!");
            console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
            win = win + 1;
            winner.textContent = 'You\'ve won: ' + win;
            
        } else if(userInput === "scissors" && compInput === "paper"){
            console.log("You win!");
            console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
            win = win + 1;
            winner.textContent = 'You\'ve won: ' + win;
            
        } else {
            console.log("You lost!");
            console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
            lose = lose + 1;
            loser.textContent = 'You\'ve lost: ' + lose;
            
        }
        choiceContainer.appendChild(choice);
        choice.textContent = 'You picked: ' + userInput + ' vs ' + compInput;

    }
    if(win === 5){
        
        result.textContent = 'You did it! You are the CHAMPION!';
        resultContainer.appendChild(result);
        tied.textContent = 'You\'ve tied: ' + tie;
        winner.textContent = 'You\'ve won: ' + win;
        loser.textContent = 'You\'ve lost: ' + lose;
        resetContainer.appendChild(reset);

    }
    if (lose === 5){
        
        result.textContent = 'You lost! Better luck next time!';
        resultContainer.appendChild(result);
        tied.textContent = 'You\'ve tied: ' + tie;
        winner.textContent = 'You\'ve won: ' + win;
        loser.textContent = 'You\'ve lost: ' + lose;
        resetContainer.appendChild(reset);
    }
}

// Restarts the game and clears old scores and results
function restart(){
        win = 0;
        lose = 0;
        tie = 0;
        tied.textContent = 'You\'ve tied: ' + tie;
        winner.textContent = 'You\'ve won: ' + win;
        loser.textContent = 'You\'ve lost: ' + lose;
        resultContainer.removeChild(result);
        resetContainer.removeChild(reset);
        choiceContainer.removeChild(choice);
}


// awaits a button click for rock
rock.addEventListener('click', function(){
    let comp = compPick();
    rockPaperScissors('rock', comp);
});

// awaits a button click for paper
paper.addEventListener('click', function(){
    let comp = compPick();
    rockPaperScissors('paper', comp);
});

// awaits a button click for scissors
scissors.addEventListener('click', function(){
    let comp = compPick();
    rockPaperScissors('scissors', comp);
});


    
