import { useState } from "react";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";

import { WINNING_COMBINATIONS } from "./data";
import GameOver from "./components/GameOver/GameOver";

const PLAYERS = {
  X : "PLAYER 1",
  O : "PLAYER 2"
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null,null,null],
  [null,null,null],
  ];


  function deriveActivePlayer(gameTurns){
    let currentPlayer = "X";
        if (gameTurns.length > 0 && gameTurns[0].player === "X") {
          currentPlayer = "O";
        }
  
        return currentPlayer;
  }

  function deriveWinner(gameBoard, players){
    let winner;

    for(const combination of WINNING_COMBINATIONS){
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
  
      if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol){
          winner = players[firstSquareSymbol];
      }
    }
    return winner;
  }

  function deriveGameBoard(turns){
      //Arrays are passed by reference so we have to make a deep copy before we use them!!
    let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
    for(const turn of turns){
        const {square, player } = turn;
        const {row, col } = square;
        gameBoard [row][col] = player;
    }

    return gameBoard;
  }

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  
  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      
    const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{
        square: { row: rowIndex, col: colIndex },
        player: currentPlayer
      }, ...prevTurns];

      return updatedTurns;
    });
  }

  function handleRematch(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers =>{
      return {...prevPlayers,
          [symbol] : newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === "X"}  onChangeName = {handlePlayerNameChange}/>
          <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === "O"} onChangeName = {handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} handleClick= {handleRematch}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );

}

export default App
