let choice  = ["Rock" , "Paper" , "Sissor"]

const computerChoice  =  document.getElementById("computerChoice");
const playerChoice  =  document.getElementById("playerChoice");
const displayResult = document.getElementById("displayResult");
const displayComputerScore  =  document.getElementById("computerScore");
const displayPlayerScore  =  document.getElementById("playerScore");


let playerscore = 0;
let computerscore = 0;

let result = "";

function playGame(myChoice){

    const index = Math.floor(Math.random()*3);
    
    if(choice[index]===myChoice){

        result = "IT'S A TIE!";
    }

    else{

        switch(myChoice){

            case "Rock":
                result = (choice[index]==="Paper")? "YOU WON!" : "YOU LOST!";
                break;

            case "Paper":
                result = (choice[index]==="Sissor")? "YOU WON!" : "YOU LOST!";
                break;

            case "Sissor":
                result = (choice[index]==="Rock")? "YOU WON!" : "YOU LOST!";
                break;

        }
    }

    computerChoice.textContent = `Computer : ${choice[index]}`;

    playerChoice.textContent = `Player : ${myChoice}`;

    displayResult.textContent = result;

    displayResult.classList.remove("greenText" , "redText");


    switch(result){

        case "YOU WON!":

            displayResult.classList.add("greenText");
            playerscore++;
            displayPlayerScore.textContent = playerscore;
            break;

            
        case "YOU LOST!":

            displayResult.classList.add("redText");
            computerscore++;
            displayComputerScore.textContent = computerscore;
            break;

    
    }

   
}



