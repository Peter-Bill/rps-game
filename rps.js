function computerPlay() {

    let choice = "";

    switch (Math.floor(Math.random()*3)) {

        case 0: 
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            choice = "unreadable.";
    }

    return choice;
}

function playRound (playerSelection, computerSelection) {

    let message = "";

    if (playerSelection = "rock") {

        switch (computerSelection) {

            case "rock":
                message = "You Tied.";
                break;
            case "paper":
                message = "You Lost!";
                break;
            case "scissors":
                message = "You Win!";
                break;
            default:
                message = "You Smell";

                return message;
        }
    }

    if (playerSelection = "paper") {

        switch (computerSelection) {

            case "rock":
                message = "You Win!";
                break;
            case "paper":
                message = "You Tied!";
                break;
            case "scissors":
                message = "You Lose!";
                break;
            default:
                message = "You Smell";

                return message;
        }
    }
    if (playerSelection = "scissors") {

        switch (computerSelection) {

            case "rock":
                message = "You Lose!";
                break;
            case "paper":
                message = "You Win!";
                break;
            case "scissors":
                message = "You Tied!";
                break;
            default:
                message = "You Smell";

                return message;
        }
    }

    return message;
}

function game() {;

    for (let i = 0; i < 5; i++) {

        playerSelection = prompt("Please input rock, paper, or scissors");

        lowerPSelect = playerSelection.toLowerCase();



        console.log(playRound(lowerPSelect, computerPlay()));

    }

}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    button.addEventListener('click', () => {


        playRound(button.id, computerPlay());
       let pick = document.querySelector('#playerpick');
       pick.textContent = `Player Picked: ${button.id}`;
    });
});