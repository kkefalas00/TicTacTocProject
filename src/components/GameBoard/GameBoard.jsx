<<<<<<< HEAD
const initialGameBoard = [
[null, null, null],
[null,null,null],
[null,null,null],
];

export default function GameBoard({onSelectSquare, turns}){

    let gameBoard = initialGameBoard;
    for(const turn of turns){
        const {square, player } = turn;
        const {row, col } = square;
        gameBoard [row][col] = player;
    }
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex,colIndex){
    //     // this is not recommended!!! When we deal with objects or arrays we create a deep copy of the that and we update the copy!!!!
    //     // setGameBoard((prevGameBoard)=>{
    //     //     prevGameBoard[rowIndex][colindex] = 'X';
    //     //     return prevGameBoard; 
    //     // });

    //     //This strongly Recommended!!!!!
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedGameBoard = [...prevGameBoard.map((innerArray)=>{
    //             return [...innerArray];
    //         })];
    //         updatedGameBoard[rowIndex][colIndex] = activeSymbol;
    //         return updatedGameBoard;
    //     });
    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
          {gameBoard.map((row, rowIndex) => (
=======

export default function GameBoard({onSelectSquare, board}){

    return (
        <ol id="game-board">
          {board.map((row, rowIndex) => (
>>>>>>> 8e09985 (Added my project files)
            <li key={rowIndex}>
              <ol>
                {row.map((playerSymbol, colIndex) => (
                  <li key={colIndex}>
<<<<<<< HEAD
                    <button onClick={()=>onSelectSquare(rowIndex, colIndex)}>
                      {playerSymbol}
                    </button>
=======
                    <button onClick={()=>onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                      {playerSymbol}
                    </button >
>>>>>>> 8e09985 (Added my project files)
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      );
}