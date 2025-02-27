<<<<<<< HEAD
export default function Log(){

    
    return <ol id="log">

=======
export default function Log({turns}){
    return <ol id="log">
        {turns.map(turn =>{
            return <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li>
        })}
>>>>>>> 8e09985 (Added my project files)
    </ol>
}