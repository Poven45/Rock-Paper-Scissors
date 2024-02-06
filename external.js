let lose = 0;
let win = 0;
let tie = 0;
const rock = document.getElementById("rock");
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// Toggles form to be visible
function toggleFormVisibility() {
    $('.myForm').toggleClass('d-none');
}

// Toggles share modal to be visible
function toggleShareModal() {
    // Add your logic to toggle the share modal here
    // You can use Bootstrap modal or any other modal library
    // For example, if using Bootstrap modal:
    $('#shareModal').modal('toggle');
}

// Close button event listener for the modal
$('#shareModal').on('hidden.bs.modal', function () {
    $('.myForm').addClass('d-none');
});


// Toggles stats to be visible
function toggleStatsVisibility() {
    $('#resultsTable').toggleClass('d-none');
}

// Add a variable to track the current round
let round = 0;

// Function to add a row to the results table
function addResultRow(userInput, compInput, result) {
    round++;

    // Get the table body
    const tableBody = $('#resultsTable tbody');

    // Create a new row
    const newRow = $('<tr>');
    
    // Add data to the row
    newRow.append('<td>' + round + '</td>');
    newRow.append('<td>' + userInput + '</td>');
    newRow.append('<td>' + compInput + '</td>');
    newRow.append('<td>' + result + '</td>');

    // Append the row to the table body
    tableBody.append(newRow);
}

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
reset.style.border = '2px solid white';
reset.style.color = 'white';
reset.addEventListener('click', () => restart());

// displays the stats table upon click
const statsContainer = document.querySelector('#stats');
const statsTable = document.createElement('button');
statsTable.textContent = "Show Stats";
statsTable.style.backgroundColor = 'blue';
statsTable.style.borderRadius = '16px';
statsTable.style.border = '2px solid white';
statsTable.style.color = 'white';
statsTable.addEventListener('click', () => toggleStatsVisibility());

// displays the form upon click
const formContainer = document.querySelector('#share');
const shareForm = document.createElement('button');
shareForm.textContent = "Show Form";
shareForm.style.backgroundColor = 'green';
shareForm.style.borderRadius = '16px';
shareForm.style.border = '2px solid white';
shareForm.style.color = 'white';
shareForm.addEventListener('click', () => {
    
    toggleFormVisibility();
    // Add a slight delay to ensure the form is toggled before opening the modal
    setTimeout(() => {
        toggleShareModal();
    }, 100);
});

// Close button event listener for the modal
const closeModal = document.querySelector('.btn-close');
closeModal.addEventListener('click', () => {
    toggleFormVisibility();
    toggleShareModal();
});

// Clear Form button event listener
$('#clearForm').on('click', function () {
    // Clear the form fields
    $('#email').val('');
    $('#scaleOfTen').val('');
    $('#textSpot').val('');
    $('#yesNo').prop('checked', false);
    $('#radio1').prop('checked', true);

    
});

// the computer picks its choice
function compPick() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// starts the game and monitors it
function rockPaperScissors(userInput, compInput) {
    userInput = userInput.toLowerCase();

    if (win < 5 && lose < 5) {
        if (userInput === compInput) {
            console.log("Tie!");
            console.log("You chose " + userInput + " and the computer picked " + compInput + " as well.");
            tie = tie + 1;
            tied.textContent = 'You\'ve tied: ' + tie;
            addResultRow(userInput, compInput, tied.textContent);

        } else if (userInput === "paper" && compInput === "rock") {
            $('body').addClass('green-flash');
            setTimeout(() => {
                $('body').removeClass('green-flash');
            }, 250);
            console.log("You win!");
            console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
            win = win + 1;
            winner.textContent = 'You\'ve won: ' + win;
            if (win <= 4) {
                addResultRow(userInput, compInput, winner.textContent);
            }

        } else if (userInput === "rock" && compInput === "scissors") {
            $('body').addClass('green-flash');
            setTimeout(() => {
                $('body').removeClass('green-flash');
            }, 250);
            
            console.log("You win!");
            console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
            win = win + 1;
            winner.textContent = 'You\'ve won: ' + win;
            if (win <= 4) {
                addResultRow(userInput, compInput, winner.textContent);
            }

        } else if (userInput === "scissors" && compInput === "paper") {
            $('body').addClass('green-flash');
            setTimeout(() => {
                $('body').removeClass('green-flash');
            }, 250);
            
            console.log("You win!");
            console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
            win = win + 1;
            winner.textContent = 'You\'ve won: ' + win;
            if (win <= 4) {
                addResultRow(userInput, compInput, winner.textContent);
            }

        } else {
            // Player loses, flash the background red
            $('body').addClass('red-flash');
            setTimeout(() => {
                $('body').removeClass('red-flash');
            }, 250);

            console.log("You lost!");
            console.log("You chose " + userInput + " and the computer picked " + compInput + ".");
            lose = lose + 1;
            loser.textContent = 'You\'ve lost: ' + lose;
            if(lose <= 4) {
                addResultRow(userInput, compInput, loser.textContent);
            }

        }
        choiceContainer.appendChild(choice);
        choice.textContent = 'You picked: ' + userInput + ' vs ' + compInput;

    }
    if (win === 5) {

        result.textContent = 'You did it! You are the CHAMPION!';
        resultContainer.appendChild(result);
        tied.textContent = 'You\'ve tied: ' + tie;
        winner.textContent = 'You\'ve won: ' + win;
        loser.textContent = 'You\'ve lost: ' + lose;
        resetContainer.appendChild(reset);
        formContainer.appendChild(shareForm);
        statsContainer.appendChild(statsTable);
        addResultRow(userInput, compInput, result.textContent);
    }
    if (lose === 5) {

        result.textContent = 'You lost! Better luck next time!';
        resultContainer.appendChild(result);
        tied.textContent = 'You\'ve tied: ' + tie;
        winner.textContent = 'You\'ve won: ' + win;
        loser.textContent = 'You\'ve lost: ' + lose;
        resetContainer.appendChild(reset);
        statsContainer.appendChild(statsTable);
        addResultRow(userInput, compInput, result.textContent);

    }
}

// Function to handle form submission
function submitForm() {
    // Get the user's input from the form
    const userEmail = $('#email').val();
    const message = $('#textSpot').val();

    // Clear the form fields
    $('#email').val('');
    $('#scaleOfTen').val('');
    $('#textSpot').val('');
    $('#yesNo').prop('checked', false);
    $('#radio1').prop('checked', true);

    $('#shareModal').modal('hide');

    // Display a popup with the thank you message
    const thankYouMessage = 'Thank you, email sent to ' + userEmail + '.\nMessage: ' + message;
    alert(thankYouMessage);
}

// Add a submit event listener to the form
$('.myForm').on('submit', function (event) {
    event.preventDefault(); // Prevent the form from actually submitting
    submitForm();
});

function restart() {
    // Check if the stats table is visible, and if yes, toggle it off
    if (!$('#resultsTable').hasClass('d-none')) {
        toggleStatsVisibility();
    }

    // Clear the results table and hide it
    $('#resultsTable tbody').empty();
    $('#resultsTable').addClass('d-none');

    win = 0;
    lose = 0;
    tie = 0;
    round = 0;
    tied.textContent = 'You\'ve tied: ' + tie;
    winner.textContent = 'You\'ve won: ' + win;
    loser.textContent = 'You\'ve lost: ' + lose;
    resultContainer.removeChild(result);
    resetContainer.removeChild(reset);
    choiceContainer.removeChild(choice);

    statsContainer.removeChild(statsTable);
    formContainer.removeChild(shareForm);

    $('.myForm').addClass('d-none');
}

// awaits a button click for rock
rock.addEventListener('click', function () {
    let comp = compPick();
    rockPaperScissors('rock', comp);
});

// awaits a button click for paper
paper.addEventListener('click', function () {
    let comp = compPick();
    rockPaperScissors('paper', comp);
});

// awaits a button click for scissors
scissors.addEventListener('click', function () {
    let comp = compPick();
    rockPaperScissors('scissors', comp);
});
