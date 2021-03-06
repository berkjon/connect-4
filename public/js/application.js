$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()



  // CONTROLLER \\
    // call function to check which column was clicked based on event info
  // all jquery here
  var Game = function(){
    this.boardState = {
      player: 'r',
      turnCounter: 0,
      lastPosition: [], // [row, column]
      boardArray: [
        ['e', 'e', 'e', 'e', 'e', 'e'], // column 0
        ['e', 'e', 'e', 'e', 'e', 'e'], // column 1
        ['e', 'e', 'e', 'e', 'e', 'e'], // column 2
        ['e', 'e', 'e', 'e', 'e', 'e'], // column 3
        ['e', 'e', 'e', 'e', 'e', 'e'], // column 4
        ['e', 'e', 'e', 'e', 'e', 'e'], // column 5
        ['e', 'e', 'e', 'e', 'e', 'e'] // column 6
      ]
    }
  }



  Game.prototype.nextTurn = function(){
    this.boardState.turnCounter++;
  }

  Game.prototype.turnColor = function(){
    if (this.boardState.turnCounter % 2 === 0) {
      this.boardState.player = 'r'
    } else {
      this.boardState.player = 'b'
    }
  }


  // MODEL \\

  // var Board = function(){
  //   // this.turnCounter = 0;
  //   // this.player = 'red';
  // }


  var renderBoard = function(boardState){
    if (boardState.player === 'b') {
      $('.current-player').css("background-color", "red");
    } else {
      $('.current-player').css("background-color", "black");
    }

    for (var column=0; column<boardState.boardArray.length; column++){ //7
      for (var row=0; row<boardState.boardArray[column].length; row++){ //6
        var currentCell = $("table tr:nth-child("+(6-row)+") td:nth-child("+(column+1)+") div");
        // debugger;
        // var currentCell = $("currentColumn.td:nth-child("+(row+1)+")");

        if (boardState.boardArray[column][row] === 'e') {
           currentCell.css("background-color", "white");
        } else if(boardState.boardArray[column][row] === 'r') {
          currentCell.css("background-color", "red");
        } else {
          currentCell.css("background-color", "black");
        }
      }
    }
  }


  $('table').click(function(event){ // refactor this if time allows
    var currentColNum = whatColumnWasClicked(event);
    if (updateBoardState(currentColNum)) {
      renderBoard(game.boardState);
      game.winCheck(game.boardState.lastPosition[1], game.boardState.lastPosition[0]);
      console.log("last position: "+game.boardState.lastPosition)
      game.nextTurn();
      game.turnColor();
    }; // pass the column number to new function that updates the array
    // winCheck();
  })

  var whatColumnWasClicked = function(inputEvent){
    var currentColString = inputEvent.target.offsetParent.className
    if (currentColString === "") {
      currentColString = inputEvent.target.className
      var currentColNum = currentColString[currentColString.length-1]
    } else {
      var currentColNum = currentColString[currentColString.length-1]
    }
    return currentColNum;
  }

  var updateBoardState = function(clickedColumnNumber){
    // big function that takes the clickedColumnNumber and checks the boardState array to find the first cell that is empty and updates that with either 'r' or 'b' depending on boardState.player
    var successfulMove = false;
    currentCol = game.boardState.boardArray[clickedColumnNumber-1]
    for (var x = 0; x<currentCol.length; x++){
      if (currentCol[x] === 'e'){
        game.boardState.lastPosition = [clickedColumnNumber-1, x];
        currentCol[x] = game.boardState.player;
        return successfulMove = true;
      }
    }
    return successfulMove;
  }


  Game.prototype.winCheck = function(rowNum, colNum){
    var that = this;
    var countColorRight = function(rowNum, colNum) { //need third arg of column
      var count = 0
      for(var x = (colNum+1); x<7; x++) { //7 should be ref col clicked up to 7
        var rightColor = that.boardState.boardArray[colNum+1][rowNum]//that variable should be 'r' or 'b'
        if (rightColor === that.boardState.player) {
          count++;
        }else{
          count = 0;
        }
      };
      console.log("count right: "+count);
      return count;
    };


    var countColorLeft = function(rowNum, colNum) {
      var count = 0
      for(var x = (colNum-1); x>0; x--) {
        var leftColor = that.boardState.boardArray[colNum-1][rowNum]
        if (leftColor === that.boardState.player) {
          count++;
        }else{
          count = 0;
        }
      };
      console.log("count left: "+count);
      return count;
    };

    var countColorUp = function(rowNum, colNum) {
      var count = 0
      for(var x = (rowNum+1); x<6; x++) {
        var upColor = that.boardState.boardArray[colNum][rowNum+1]
        if (upColor === that.boardState.player) {
          count++;
        }else{
          count = 0;
        }
      };
      console.log("count up: "+count);
      return count;
    };


    var countColorDown = function(rowNum, colNum) {
      var count = 0
      for(var x = (rowNum-1); x>0; x--) {
        var downColor = that.boardState.boardArray[colNum][rowNum-1]
        if (downColor === that.boardState.player) {
          count++;
        }else{
          count = 0;
        }
      };
      console.log("count down: "+count);
      return count;
    };

    var horizontalWinCheck = 1 + countColorRight(rowNum, colNum) + countColorLeft(rowNum, colNum);
    var verticalWinCheck = 1 + countColorUp(rowNum, colNum) + countColorDown(rowNum, colNum);

    // if ((horizontalWinCheck || verticalWinCheck) >= 4) {
    //   alert(that.boardState.player + " wins!");
    // };
  }

  var game = new Game();


});
