import { useState } from "react";

export default function Player({initialName, symbol, isActive}){

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing , setIsEditing] = useState(false);

    function handleEditClick(){
        //update the state based on the previous value of the state
        //We should pass a function! This is a strong recomendation of the React!
        setIsEditing((editing)=> !editing);
    }

    function handleChange(e){
        setPlayerName(e.target.value);
    }

    let spanName = <span className="player-name">{playerName}</span>;

    if (isEditing){
        //we use value = {name} to pre polulate the value of the input to name of the current player after  the state change
        spanName = <input type="text"  required  value = {playerName} onChange={handleChange}/>
    }

    return (
        <li className={isActive ? "active" : undefined}>
              <span className="player">
                {spanName}
                <span className="player-symbol">{symbol}</span>
              </span>
              <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
            </li>
    );
} 