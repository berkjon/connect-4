// game logic to Color winner

// logic need rownum, colnum, and updated board

var switchTurns = function() {
  if (boardState.player === 'red') {
    boardState.player = 'black'
  } else {
    boardState.player = 'red'
  };
};

var countColorRight = function(rowNum, colNum) { //need third arg of column
  var count = 1
  for(var x = (colNum+1); x<7; x++) { //7 should be ref col clicked up to 7
    var rightColor = game.boardState.boardArray[colNum][rowNum]//this variable should be 'r' or 'b'
    if (rightColor === game.boardState.player) {
      count++;
    };
  };
  return count;
};


var countColorLeft = function(rowNum, colNum) {
  var count = 1
  for(var x = (colNum-1); x>0; x--) {
    var leftColor = game.boardState.boardArray[colNum][rowNum]
    if (leftColor === game.boardState.player) {
      count++;
    };
  };
  return count;
};

var countColorUp = function(rowNum, colNum) {
  var count = 1
  for(var x = (rowNum+1); x<6; x++) {
    var upColor = game.boardState.boardArray[colNum][rowNum]
    if (upColor === game.boardState.player) {
      count++;
    };
  };
  return count;
};


var countColorDown = function(rowNum, colNum) {
  var count = 1
  for(var x = (rowNum-1); x>0; x--) {
    var downColor = game.boardState.boardArray[colNum][rowNum]
    if (downColor === game.boardState.player) {
      count++;
    };
  };
  return count;
};

var checkWinOrSwitchTurn = function(rownum, colNum) {
  var horizontalWinCheck = countColorRight(rowNum, colNum) + countColorRight(rowNum, colNum)
  var verticalWinCheck = countColorUp(rowNum, colNum) + countColorDown(rowNum, colNum)

  if ((horizontalWinCheck || verticalWinCheck) >= 4) {
    alert(boardState.player + "wins!");
  } else {
    switchTurns();
  };
};
