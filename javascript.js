function getComputerChoice()
{ 
    let computerChoice=Math.floor(Math.random()*3);
    if(computerChoice==0) return "rock";
    else if(computerChoice==1) return "paper";
    else return "scissors";
}

function playround(humanChoice,computerChoice)
{
    if (humanChoice==computerChoice) 
    {
        document.getElementById("result").innerHTML = "It's a draw!";
        return "none";
    }
    else if(humanChoice=="rock")
    {
        if(computerChoice=="scissors")
        {
            document.getElementById("result").innerHTML = "You win! Rock beats Scissors";
            return "human";
        }
        else
        {
            document.getElementById("result").innerHTML = "You lose! Paper beats Rock";
            return "computer";
        }
    }
    else if(humanChoice=="paper")
    {
        if(computerChoice=="scissors")
        {
            document.getElementById("result").innerHTML = "You lose! Scissors beats Paper";
            return "computer";
        }
        else
        {
            document.getElementById("result").innerHTML = "You win! Paper beats Rock";
            return "human";
        }
    }
    else if(humanChoice=="scissors")
    {
        if(computerChoice=="paper")
        {
            document.getElementById("result").innerHTML = "You win! Scissors beats Paper";
            return "human";
        }
        else
        {
            document.getElementById("result").innerHTML = "You lose! Rock beats Scissors";
            return "computer";
        }
    }
}

let humanScore=0,computerScore=0;
let btns = document.querySelectorAll('button');

for (i of btns) {
  i.addEventListener('click', function() {
    document.getElementById("winner").innerHTML="";
    let humanSelection = this.innerHTML.toLowerCase();
    let computerSelection= getComputerChoice();
    console.log("Human: ", humanSelection);
    console.log("Computer: ", computerSelection);
    console.log("Winner:",playround(humanSelection,computerSelection));
    if(playround(humanSelection,computerSelection)=="human") humanScore++;
    else if(playround(humanSelection,computerSelection)=="computer") computerScore++;
    document.getElementById("humanChoice").innerHTML=`You chose: ${humanSelection}`;
    document.getElementById("computerChoice").innerHTML=`Computer chose: ${computerSelection}`;
    document.getElementById("humanScore").innerHTML=`Player Score: ${humanScore}`;
    document.getElementById("computerScore").innerHTML=`Computer Score: ${computerScore}`;
    if(computerScore==5) 
    {
        document.getElementById("winner").innerHTML = "Computer wins!";
        humanScore=0,computerScore=0;
    }
    else if (humanScore==5)
    { 
        document.getElementById("winner").innerHTML = "Human wins!";
        humanScore=0,computerScore=0;
    }
  });
}