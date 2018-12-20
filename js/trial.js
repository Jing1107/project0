console.log('wow');

$(document).ready(function (){
  const randomColor = function () {
    return Math.random() * 255;
  }
  console.log(randomColor());

  $(window).on('mousemove',function (){
    const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    $('h1').css('background-color', bgColor);
  });
});


let turnsPlayed = 0;
let playerOne = true;

let board =["-", "-", "-",
          "-", "-", "-",
          "-", "-", "-" ];

let player1 = "X";
let player2 = "O";

// let player1 = $('#player1').html("X");
// let player2 = $('#player2').html("O");

// $("#player1").click(function(){
//   //$(":text").val("Hello World");
//   return player1;
// });
//
// $("#player2").click(function(){
//   //$(":text").val("Hello World");
//   return player2;
// });

const renderToScreen = function ( boxId ){   //put contecnt into board
  for (var i = 0; i < board.length; i++) {
    $('#' + i).text(board[i])
    //console.log (board[i])
  }
//liesten click
}



const reset = function (){ // reset game
  board =["-", "-", "-",
            "-", "-", "-",
            "-", "-", "-" ];
  turnsPlayed = 0; // clear origin playturn
  renderToScreen();
  //location.reload();
};



const playTurn = function(num) {
  if (board [num] === player1 || board [num] === player2) { //check is there x or o in cureent board, if there is x or o in board,
    return ;        // you cannot change to other value.
  }

  if (playerOne) { //player x turn, when value is true will go to next line.
    //board [num] = "X"
    board [num] = player1;
    renderToScreen ();
    turnsPlayed = turnsPlayed + 1;
    playerOne = false
    //checkForWin ("X")
    checkForWin (player1)

    //if (checkForWin(player1) !== true && checkForWin(player2) !== true ){
    if ( turnsPlayed  === 9 && (checkForWin(player1) !== true) ){
    //if ( turnsPlayed  === 9 && (checkForWin("X") !== true) ) {
      //console.log("draw");
      alert("Oh no, it's a draw")
    }

  } else {
    //board [num ] = "O"
    board [num] = player2;
    renderToScreen ();
    turnsPlayed = turnsPlayed + 1;
    //playTwoIsNext = true
    playerOne = true
    //checkForWin ("O")
    checkForWin (player2)
  }
}



const checkForWin = function (player1, player2) {

  if (
    (board[0] === player1 && board[1] === player1 && board[2] === player1) ||
    (board[3] === player1 && board[4] === player1 && board[5] === player1) ||
    (board[6] === player1 && board[7] === player1 && board[8] === player1) ||
    (board[0] === player1 && board[3] === player1 && board[6] === player1) ||
    (board[1] === player1 && board[4] === player1 && board[7] === player1) ||
    (board[2] === player1 && board[5] === player1 && board[8] === player1) ||
    (board[0] === player1 && board[4] === player1 && board[8] === player1) ||
    (board[2] === player1 && board[4] === player1 && board[6] === player1)

  ) {
    //console.log("winner");
    alert (`winner is ${player1}`)
    return true;
  } else if (
    (board[0] === player2 && board[1] === player2 && board[2] === player2) ||
    (board[3] === player2 && board[4] === player2 && board[5] === player2) ||
    (board[6] === player2 && board[7] === player2 && board[8] === player2) ||
    (board[0] === player2 && board[3] === player2 && board[6] === player2) ||
    (board[1] === player2 && board[4] === player2 && board[7] === player2) ||
    (board[2] === player2 && board[5] === player2 && board[8] === player2) ||
    (board[0] === player2 && board[4] === player2 && board[8] === player2) ||
    (board[2] === player2 && board[4] === player2 && board[6] === player2)
  ){
    alert (`winner is ${player2}`)
    return true;
  } else {
    return false;
  }

};


$(document).ready( function() { //主程序，当玩家点击任意board的时候，运行playturn的function，直到该function结束。
  //console.log("ready");

  $('#0').click( function () {
    playTurn(0)
  })
  $('#1').click( function () {
    playTurn(1)
  })
  $('#2').click( function () {
    playTurn(2)
  })
  $('#3').click( function () {
    playTurn(3)
  })
  $('#4').click( function () {
    playTurn(4)
  })
  $('#5').click( function () {
    playTurn(5)
  })
  $('#6').click( function () {
    playTurn(6)
  })
  $('#7').click( function () {
    playTurn(7)
  })
  $('#8').click( function () {
    playTurn(8)
  })
  $('.reset').click( function(){
    reset()
  })
})
