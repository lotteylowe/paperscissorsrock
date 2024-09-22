
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
let storedImageId = ''; 
// let playerChoice = "";
let gameOver = false

const weaponImages = {
    rock: "images/rock.png",
    paper: "images/paper.png",
    scissors: "images/scissors.png"
};

function storeImageId(choiceID) {

    if (gameOver) {
        // If the game is over, prevent further clicks
        console.log("Game is over. No further inputs allowed.");
        return;
    }
    storedImageId = choiceID; // Store the ID of the clicked image
    console.log('Stored Image ID:', storedImageId); // Output the stored ID
    playGame();
}


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


function getPlayerChoice() {
    return storedImageId; // Use the stored player choice
}

function updateWeaponPlaceholders(playerChoice, computerChoice) {
    // Update player weapon placeholder with selected image
    document.getElementById("player-weapon").innerHTML = `<img src="${weaponImages[playerChoice]}" alt="${playerChoice}" class="weapon-img">`;

    // Update computer weapon placeholder with randomly selected image
    document.getElementById("computer-weapon").innerHTML = `<img src="${weaponImages[computerChoice]}" alt="${computerChoice}" class="weapon-img">`;
}

// function getPlayerChoice()
//{
    // const playerChoice = prompt("What is your choice?");
    // if (playerChoice.toLocaleLowerCase() === "paper")
    // {
    //     return(playerChoice);
    // }
    // else if (playerChoice.toLocaleLowerCase() === "scissors")
    // {
    //     return(playerChoice);
    // }
    // else if (playerChoice.toLocaleLowerCase() === "rock")
    // {
    //     return(playerChoice);
    // }
//}


function playRound(playerChoice, computerChoice)
{
    updateWeaponPlaceholders(playerChoice, computerChoice);
    //const playerChoice = storedImageId;
    
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
{  const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    if (!playerSelection) {
        console.log("Please select a weapon.");
        return;
    }

    gameRound++;
    document.getElementById("round-display").textContent = "Round " + gameRound;

    console.log(playRound(playerSelection, computerSelection));

    console.log("Computer chooses " + computerSelection);
    console.log("Player chooses " + playerSelection);
    console.log("Round " + gameRound);



    console.log("player score " + playerScore);
    console.log("computer score " + computerScore);

    document.getElementById("player-score").textContent = playerScore + " / 5";
    document.getElementById("computer-score").textContent = computerScore + " / 5";


    if (playerScore >= 5 || computerScore >= 5) {
        gameOver = true;
        console.log("Game Over!");
        console.log("Final Score - Player: " + playerScore + " Computer: " + computerScore);


        document.getElementById("round-display").textContent = "Game Over! " + (playerScore >= 5 ? "Player wins!" : "Computer wins!");
    
    }
}

 //playGame();