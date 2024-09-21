
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

function getComputerChoice() 
{
 
    const computerChoice = Math.floor(Math.random() * 3) +1;

    if (computerChoice === 1)
    {
        return "rock";
    }

    else if (computerChoice === 2)
    {
        return "paper";
    }
    
    else if (computerChoice === 3)
    {
        return "scissors";
    }
}


function getPlayerChoice()
{
    const playerChoice = prompt("What is your choice?");

    if (playerChoice.toLocaleLowerCase() === "paper")
    {
        return(playerChoice);
    }
    else if (playerChoice.toLocaleLowerCase() === "scissors")
    {
        return(playerChoice);
    }
    else if (playerChoice.toLocaleLowerCase() === "rock")
    {
        return(playerChoice);
    }

}


function playRound(playerChoice, computerChoice)
{
    if (playerChoice === computerChoice)
    {
        return('its a tie');
    }

    if (playerChoice === "rock")
    {
        if(computerChoice === "scissors")
        {
            playerScore++;
            return("Player scores!");
        }
        else
        {
            computerScore++;
            return("Computer scores!");
        }
    }

    if (playerChoice === "paper")
    {
        if(computerChoice === "rock")
        {
            playerScore++;
            return("Player scores!");
        }
        else
        {
            computerScore++;
            return("Computer scores!");
        }
    }

    if (playerChoice === "scissors")
    {
        if(computerChoice === "paper")
        {
            playerScore++;
            return("Player scores!");
        }
        else
        {
            computerScore++;
            return("Computer scores!");
        }
    }

 else
    {
        return('pick paper scissors or rock, bruh');
    }
}


function playGame()
{
    while (playerScore < 5  && computerScore < 5)
    {
        // playRound();
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        gameRound++;
        console.log(playRound(playerSelection, computerSelection));

        console.log(computerSelection);
        console.log(playerSelection);
        console.log("Round " + gameRound);
    }


    console.log("player " + playerScore);
    console.log("computer " + computerScore);
    console.log();
}

 playGame();








