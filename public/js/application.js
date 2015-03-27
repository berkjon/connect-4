$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});

// CONTROLLER \\
  // call function to check which column was clicked based on event info
// all jquery here
var Game = function(){
  this.boardState = {
    player: 'red',
    turnCounter: '0',
    boardArray: [
      ['e', 'e', 'e', 'e', 'e', 'e'], // column 0
      ['e', 'e', 'e', 'e', 'e', 'e'], // column 1
      ['e', 'e', 'e', 'e', 'e', 'e'], // column 2
      ['e', 'e', 'e', 'e', 'e', 'e'], // column 3
      ['e', 'e', 'e', 'r', 'e', 'e'], // column 4
      ['e', 'e', 'e', 'e', 'e', 'e'], // column 5
      ['e', 'e', 'e', 'e', 'e', 'e'] // column 6
    ]
  }
}

Game.prototype.winCheck = function(){
 // logic for win checking on this.boardState
}

Game.prototype.nextTurn = function(){
  this.turnCounter++;
}

Game.prototype.turnColor = function(board){
  if (boardState.turnCounter % 2 === 0) {
    boardState.player = 'red'
  } else {
    boardState.player = 'black'
  }
}


// MODEL \\

// var Board = function(){
//   // this.turnCounter = 0;
//   // this.player = 'red';
// }


var renderBoard = function(boardState){
  if (boardState.player === 'red') {
    $('.current-player').css("background-color", "red");
  } else {
    $('.current-player').css("background-color", "black");
  }

  for (var column=0; column<boardState.boardArray.length; column++){
    for (var row=0; row<boardState.boardArray[column].length; row++){
      var currentColumn = $("table tr:nth-child(column+1)");
      var currentCell = $("currentColumn.td:nth-child(row+1)");
      if (boardState[column][row] === 'e') {
         currentCell.css("background-color", "white")
      } else if(boardState[column][row] === 'r') {
        currentCell.css("background-color", "red")
      } else {
        currentCell.css("background-color", "black")
      }
    }
  }
}


$('table').click(function(event){
  that = this;
  currentCol(that);
})

var currentCol = function(clickArea){
  clickArea['<table>']['']
}






var game = new Game();
