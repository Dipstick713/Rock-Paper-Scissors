function getComputerChoice()
{ 
    let computerChoice=Math.floor(Math.random()*3);
    if(computerChoice==0) return "rock";
    else if(computerChoice==1) return "paper";
    else return "scissors";
}

function getHumanChoice()
{
    let humanChoice = prompt("Enter your choice");
    return humanChoice.toLowerCase();
}

function playround(humanChoice,computerChoice)
{
    if(humanChoice==computerChoice) console.log("It's a draw!");
    else if(humanChoice=="rock")
    {
        if(computerChoice=="scissors")
        {
            console.log("You win! Rock beats Scissors");
            return "human";
        }
        else
        {
            console.log("You lose! Paper beats Rock");
            return "computer";
        }
    }
    else if(humanChoice=="paper")
    {
        if(computerChoice=="scissors")
        {
            console.log("You lose! Scissors beats Paper");
            return "computer";
        }
        else
        {
            console.log("You win! Paper beats Rock");
            return "human";
        }
    }
    else
    {
        if(computerChoice=="paper")
        {
            console.log("You win! Scissors beats Paper");
            return "human";
        }
        else
        {
            console.log("You lose! Rock beats Scissors");
            return "computer";
        }
    }
}

function playgame()
{
    let humanScore=0;
    let computerScore=0;
    for(let i = 0; i<5;++i)
    {
        if(playround(getHumanChoice(),getComputerChoice())=="human") humanScore++;
        else computerScore++;
    }
    if(computerScore>humanScore) console.log("Computer wins!");
    else if (computerScore<humanScore) console.log("Human wins!");
    else console.log("Draw!");
}

playgame();