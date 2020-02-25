
function newBoggleBoard() {

  let boggleBoard = [];
  for(i=0;i<4;i++)
  {
    boggleBoard.push(['_', '_', '_', '_'])
  }
  return boggleBoard;
}


/**
 * Prints out a boggle board.
 */

let dice = ['AAEEGN','ELRTTY','AOOTTW','ABBJOO','EHRTVW','CIMOTU','DISTTY','EIOSST','DELRVY','ACHOPS','HIMNQU','EEINSU','EEGHNW','AFFKPS','HLNNRZ','DEILRX'];

function printBoggleBoard(boggleBoard) {
  for (let row of boggleBoard) {
    console.log(row.join(' '));
  }
}

function randomInteger(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Shake a boggle board and fill it with letters.
 */
function shake(boggleBoard) {
  for (let row of boggleBoard)
  {
    for (i=0;i<4;i++)
    {
      let index = dice[(randomInteger(0, dice.length - 1))];
      row[i] = index[Math.floor(Math.random() * (6))];
    }
  }
  console.log(boggleBoard);
  return boggleBoard;
}

let board;

function getBoard() {
  board = newBoggleBoard();
  printBoggleBoard(board);
}

$('.board').on('click', function() {
  shake(board);
  printBoggleBoard(board);
});



//let board = newBoggleBoard();

//shake(board);
/*
function inverseBoard (board)
{
  for (let row of board)
  {
    row = row.reverse();
  }
  return board;
}

let inverseRows = inverseBoard(board);

let reverseBoard = inverseRows.reverse();

function boggleBoardContainsWord(board, word) {
  let checkZontal = "";
  let checkVert = "";

  for (let row of boggleBoard)
   {
    for (i=0;i<4;i++)
    {
      checkZontal = checkZontal + boggleBoard[i];
      //let index = dice[(randomInteger(0, dice.length - 1))];
      //row[i] = index[Math.floor(Math.random() * (6))];
    }
    if (checkZontal === word)
    {
      return true;
    }
   }
  if (checkVert === word)
  {
    return true;
  }
  else
  {
    return false;
  }

}

printBoggleBoard(board);
*/
