import { useState } from "react";
import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";
import Log from "./components/Log/Log";

function App() {
  const[gameTurns, setGameTurns] = useState([]);
  const [activePlayer,SetActivePlayer] = useState("X");



  function handleSelectSquare(rowIndex, colIndex){
    SetActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");
    setGameTurns((prevTurns)=>{

      let currentplayer = "X";
      if(prevTurns.length> 0 && prevTurns[0].player === "X"){
        currentplayer = "O";
      }

      const updatedTurns = [{
          square:{row:rowIndex, col: colIndex}, 
          player: currentplayer
      }, ...prevTurns];

      return updatedTurns;
    });
  }

  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
           <Player initialName= "Player 1" symbol= "X" isActive={activePlayer === "X"}/>
            <Player initialName= "Player 2" symbol= "O" isActive={activePlayer === "O"}/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
        </div>

        <Log />
      </main>
     );
}

export default App
