let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {

    const options = ["rock", "paper", "scissors"];
    //rock, paper, scissors
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];

}

const drawGame = () => {
    message.innerText = "The game was draw! Play again";
    message.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        message.innerText = (`You won! Your ${userChoice} beats ${computerChoice}`);
        message.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }

    else{
        message.innerText = (`You lost! Computer's ${computerChoice} beats ${userChoice}`);
        message.style.backgroundColor = "red";
        computerScore++;
        computerScorePara.innerText = computerScore;
    }
}


const playGame = (userChoice) => {
    
    //Generate computer choice -> modular way of programming
    const computerChoice = genComputerChoice();

    if(userChoice === computerChoice){
        //Draw Game
        drawGame();
    }

    else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors or paper for computer
            userWin = computerChoice === "paper" ? false : true;
        }

        else if(userChoice === "paper"){
            // rock or scissors for computer
            userWin = computerChoice === "scissors" ? false : true;
        }

        else{
            // rock or paper for computer
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }

};


choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});