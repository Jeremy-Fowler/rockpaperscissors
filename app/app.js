// rock=0
// paper=1
// scissors=2

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)
    return(num)
}
function play(playerChoice){
    console.log(playerChoice)
    let computerChoice = getComputerChoice() 
    console.log(computerChoice)
    // ROCK OPTION
    if (playerChoice === "rock" && computerChoice == 0){    
        console.log("DRAW GAME")
        return "DRAW GAME"
    }
    if (playerChoice === "rock" && computerChoice == 1){    
        console.log("YOU LOSE")
        return "YOU LOSE"
    }
    if (playerChoice === "rock" && computerChoice == 2){    
        console.log("YOU WIN")
        return "YOU WIN"
    }

    // PAPER OPTION
    if (playerChoice === "paper" && computerChoice == 1){    
        console.log("DRAW GAME")
        return "DRAW GAME"
    }
    if (playerChoice === "paper" && computerChoice == 2){    
        console.log("YOU LOSE")
        return "YOU LOSE"
    }
    if (playerChoice === "paper" && computerChoice == 0){    
        console.log("YOU WIN")
        return "YOU WIN"
    }

    // SCISSORS OPTION
    if (playerChoice === "scissors" && computerChoice == 2){    
        console.log("DRAW GAME")
        return "DRAW GAME"
    }
    if (playerChoice === "scissors" && computerChoice == 0){    
        console.log("YOU LOSE")
        return "YOU LOSE"
    }
    if (playerChoice === "scissors" && computerChoice == 1){    
        console.log("YOU WIN")
        return "YOU WIN"
    }

}
