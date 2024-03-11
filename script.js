let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice")
let msg = document.querySelector(".msg")
let userScorePara = document.querySelector(".userscore")
let compScorePara = document.querySelector(".computerscore")

let showWinner = (userWin) =>{
    if (userWin){
        userScore++
        userScorePara.innerHTML = userScore
        msg.innerHTML = "You win"
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++
        compScorePara.innerHTML = compScore

        msg.innerHTML = "You lose"
        msg.style.backgroundColor = "red"
    }
    
}

let drawGame = () =>{
    console.log("draw game")
    msg.innerHTML = "Game was Draw Play Again"
    msg.style.backgroundColor = "green"
}

let genComputerChoice = () =>{
    let options = ["rock", "papper", " scissor"]
    let ranIdx = Math.floor(Math.random() * 3)
    return options[ranIdx]
}

let playGame = (userChoice) =>{
    console.log("userchoice = ", userChoice)
    const compChoice = genComputerChoice()
    console.log("compchoice = ", compChoice)

    if (userChoice === compChoice){
        drawGame()
    }
    else{
        let userWin = true
        if (userChoice === "rock"){
            // papper // scissors
            userWin = compChoice === "papper" ? false : true
        }
        else if (userChoice === "papper"){
            // rock // scissors
            userWin = compChoice === "scissor" ? false : true
        }
        else{
            userWin = compChoice === "rock" ? flase : true
        }
        showWinner(userWin)
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked" , userChoice)
        playGame(userChoice)
    })
}) 