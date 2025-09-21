// Factory function: Function that makes and returns objects
// It can be reused as it is like a blueprint

// Factory Function 
function Players(name, symbol){
  return {name, symbol}
}


// IIFE: Immediately runs a function, and stores it in a variable 
// This means it cannot be reused

// IIFE: Only one board in the game is necessary
const GameBoard = (function(){
  let gameBoard = ["", "", "", "", "", "", "", "", ""]

  // Reset the board 
  function Reset(){
    gameBoard = ["", "", "", "", "", "", "", "", ""]
  }

  // Getter 
  function GetBoard(){
    return gameBoard
  }

  // Setter 
  function SetBoard(index, symbol){
    gameBoard[index] = symbol  
    return gameBoard
  }

  return {Reset, GetBoard, SetBoard}

})() // <- "()" means that function is run immediately 


// Game Controller: Another IIFE as you only need one instance 
const GameControl = (function(){
  let player1 = Players("Rui", "O")
  let player2 = Players("Sam", "X")

  let c1r1 = document.getElementById("c1r1")
  let c2r1 = document.getElementById("c2r1")
  let c3r1 = document.getElementById("c3r1")
  let c1r2 = document.getElementById("c1r2")
  let c2r2 = document.getElementById("c2r2")
  let c3r2 = document.getElementById("c3r2")
  let c1r3 = document.getElementById("c1r3")
  let c2r3 = document.getElementById("c2r3")
  let c3r3 = document.getElementById("c3r3")

  turn = true 

  function switchTurns(){
    if (turn === true){
      turn = false
    } else if (turn === false){
      turn = true 
    }
  }


  function Damn(symbol){
    c1r1.addEventListener("click", function(){
      buttonText = document.createElement("p")
      buttonText.textContent = symbol
      buttonText.classList.add("button-symbol")
      c1r1.appendChild(buttonText)
    })
  }

  function PlayGame(index){
    if (turn === true){
      Damn("O")
      console.log(`${player1.name} makes a turn!`)
      let gameBoard = GameBoard.SetBoard(index, "O")
      console.log(gameBoard)
      CheckWin(gameBoard)
    } else if (turn === false){
      console.log(`${player2.name} makes a turn!`)
      let gameBoard = GameBoard.SetBoard(index, "X")
      console.log(gameBoard)
      CheckWin(gameBoard)
    }
    switchTurns()
  }

  function CheckWin(gameBoard){

    if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") {
      console.log("Player 1 wins!")
      GameBoard.Reset()
      console.log(GameBoard.GetBoard())
    } else if (gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") {
      console.log("Player 1 wins!")
    } else if (gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O") {
      console.log("Player 1 wins!")
    } else if (gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") {
      console.log("Player 1 wins!")
    } else if (gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O") {
      console.log("Player 1 wins!")
    } 
    
    else if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
      console.log("Player 2 wins!")
    } else if (gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X") {
      console.log("Player 2 wins!")
    } else if (gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") {
      console.log("Player 2 wins!")
    } else if (gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") {
      console.log("Player 2 wins!")
    } else if (gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X") {
      console.log("Player 2 wins!")
    }


  }


  return {PlayGame}
})()

GameBoard.GetBoard()
GameControl.PlayGame(0)
GameControl.PlayGame(8)
GameControl.PlayGame(1)
GameControl.PlayGame(4)
GameControl.PlayGame(2)