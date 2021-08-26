// rock=0
// paper=1
// scissors=2

const GAME_RESULTS = document.getElementById("gameResults")
function changePicture(){
    
}
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)
    return(num)
}

function imagerock(){
    if (document.getElementById("mainImage").src != "https://cseweb.ucsd.edu//~bcipolli/docs/posters/SfN2015/2015/images/the-rock-eyebrow-mirror.jpg"){
        document.getElementById("mainImage").src =  "https://cseweb.ucsd.edu//~bcipolli/docs/posters/SfN2015/2015/images/the-rock-eyebrow-mirror.jpg"
    }
}


function play(playerChoice){
    let computerChoice = getComputerChoice() 

    // ROCK OPTION
    if (playerChoice === "rock" && computerChoice == 0){    
        console.log("DRAW GAME")
        document.getElementById("gameResults").innerText="DRAW GAME"
        return "DRAW GAME"
    }
    if (playerChoice === "rock" && computerChoice == 1){    
        console.log("YOU LOSE")
        document.getElementById("gameResults").innerText="YOU LOSE"
        return "YOU LOSE"
    }
    if (playerChoice === "rock" && computerChoice == 2){    
        console.log("YOU WIN")
        document.getElementById("gameResults").innerText="YOU WIN"
        return "YOU WIN"
    }

    // PAPER OPTION
    if (playerChoice === "paper" && computerChoice == 1){    
        console.log("DRAW GAME")
        document.getElementById("gameResults").innerText="DRAW GAME"
        return "DRAW GAME"
    }
    if (playerChoice === "paper" && computerChoice == 2){    
        console.log("YOU LOSE")
        document.getElementById("gameResults").innerText="YOU LOSE"
        return "YOU LOSE"
    }
    if (playerChoice === "paper" && computerChoice == 0){    
        console.log("YOU WIN")
        document.getElementById("gameResults").innerText="YOU WIN"
        return "YOU WIN"
    }

    // SCISSORS OPTION
    if (playerChoice === "scissors" && computerChoice == 2){    
        console.log("DRAW GAME")
        document.getElementById("gameResults").innerText="DRAW GAME"
        return "DRAW GAME"
    }
    if (playerChoice === "scissors" && computerChoice == 0){    
        console.log("YOU LOSE")
        document.getElementById("gameResults").innerText="YOU LOSE"
        return "YOU LOSE"
    }
    if (playerChoice === "scissors" && computerChoice == 1){    
        console.log("YOU WIN")
        document.getElementById("gameResults").innerText="YOU WIN"
        return "YOU WIN";
    }

}
function drawResults(){
    
}