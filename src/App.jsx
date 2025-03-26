import React from "react"

function Square({value, onSquareClick}){

  return(
    <button className="button" onClick={onSquareClick}>{value}</button>
  )
}

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);
  
  function handleClick(i){
    const newSquares = squares.slice();
    if (newSquares[i] || calculateWin(squares)){
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    
    setSquares(newSquares);
    
    setXIsNext(!xIsNext);
    
  }
  function resetGame(){
    const emptySquares = Array(9).fill(null)
    setSquares(emptySquares);
    setXIsNext(true);

  }
  
  const winner = calculateWin(squares);
  let status = "";
  status = xIsNext ? "Next move is : X" : "Next move is : O"

  if (winner) status = "The winner is : " + winner;
  return (
    <>
    <div className="project">

      <div className="header">
        <h1 className="gameTitle">Tic-Tac-Toe</h1>
        <p>{status}</p>
      </div>
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
        <button className="resetButton" onClick={resetGame}>Reset</button>
    </div>
    </>
  )
}

function calculateWin(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for (let i = 0; i < lines.length; i++){
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
      return squares[a];
    }
  }
  return false;
}

