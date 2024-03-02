const cells = document.querySelectorAll(".cell");
const btn = document.getElementsByClassName('btn');
const status = document.getElementById("status");

let currentPlayer = 'X';
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
       if(board[index] === "" && gameActive) {

         board[index] = currentPlayer;
         
         cell.innerHTML = currentPlayer;

         if(checkWinner()) {
           status.innerHTML = `${currentPlayer} Wins!`;
           gameActive = false;
         }else if(board.every(cell => cell !== '')) {
           status.innerHTML = "It is a toe!";
         }else {
             currentPlayer = currentPlayer === "X" ? "O" : "X";
             status.innerHTML = `Player ${currentPlayer}'s turn!`;
         }
         
       }
        
    })
})

function checkWinner() {
     const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
     ];

     return winPatterns.some(pattern => (
        board[pattern[0]] !== '' &&
        board[pattern[0]] === board[pattern[1]] &&
        board[pattern[1]] === board[pattern[2]]
    ));
   
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;

    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}