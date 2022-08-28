const options = ["rock", "paper", "scissors"];
let userSelection = "";
let userscore = 0;
let compscore = 0;
const rockOption = document.querySelector(".image.rock");
const paperOption = document.querySelector(".image.paper");
const scissorsOption = document.querySelector(".image.scissors");
const body = document.querySelector("body");

const resultDiv = document.createElement("div");
resultDiv.classList.add("results");
body.appendChild(resultDiv);

const currentResult = document.createElement("div");
currentResult.classList.add("scores");
currentResult.setAttribute('style', 'white-space: pre;');
resultDiv.appendChild(currentResult);

body.appendChild(resultDiv);
rockOption.addEventListener('click', () => {
    userSelection = "rock";
    game(userSelection);
});
paperOption.addEventListener('click', () => {
    userSelection = "paper";
    game(userSelection);
});
scissorsOption.addEventListener('click', () => {
    userSelection = "scissors";
    game(userSelection);
});

function computerSelection(options)
{
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice
}



function game(userSelection){
    let computerChoice = computerSelection(options);
    let result = "";
    if (userSelection == computerChoice){
        result = "The game was a tie";
    }
    else if ((userSelection == "rock" && computerChoice == "scissors") || (userSelection == "paper" && computerChoice == "rock") || (userSelection == "scissors" && computerChoice == "paper")){
        result = `You win, you got lucky this time!! ${userSelection} beats ${computerChoice}!!`;
        userscore +=1
    }   
    else {
        result = `You lose this round weakling!! ${computerChoice} beats ${userSelection}!!`;
        compscore +=1
    }
    if(userscore==5){
        currentResult.textContent="Congrats, you are one lucky person!!";
        userscore =0;
        compscore=0;
    }
    else if(compscore==5){
        currentResult.textContent="I feel sorry that you have that much of a bad luck";
        userscore =0;
        compscore=0;
    }
    else if (userscore < 5 || compscore < 5){
        currentResult.textContent = `${result}\r\n User score: ${userscore} \r\n Computer score: ${compscore}`;
    }
}

    
