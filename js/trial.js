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
let playOneIsNext = true;
// let boxId = 0;
// let xWin = 0;
// let oWin = 0;

let board =["-", "-", "-",
          "-", "-", "-",
          "-", "-", "-" ];

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
  //location.reload(); //
};



const playTurn = function(num) {
  if (board [num] === "X" || board [num] === "O") { //check is there x or o in cureent board, if there is x or o in board,
    return ;        // you cannot change to other value.
  }

  if (playOneIsNext) { //player x turn, when value is true will go to next line.
    board [num] = "X"
    renderToScreen ();
    turnsPlayed = turnsPlayed + 1;
    playOneIsNext = false
    checkForWin ("X")

    if ( turnsPlayed  === 9 && (checkForWin("X") !== true) ) {
      //console.log("draw");
      alert("You should practice more ~~")
    }

  } else {

    board [num ] = "O"
    renderToScreen ();
    turnsPlayed = turnsPlayed + 1;
    //playTwoIsNext = true
    playOneIsNext = true
    checkForWin ("O")
  }
  //checkForWin ()
}




const checkForWin = function (player) {
  if (
    (board[0] === player && board[1] === player && board[2] === player) ||
    (board[3] === player && board[4] === player && board[5] === player) ||
    (board[6] === player && board[7] === player && board[8] === player) ||
    (board[0] === player && board[3] === player && board[6] === player) ||
    (board[1] === player && board[4] === player && board[7] === player) ||
    (board[2] === player && board[5] === player && board[8] === player) ||
    (board[0] === player && board[4] === player && board[8] === player) ||
    (board[2] === player && board[4] === player && board[6] === player)

  ) {
    //console.log("winner");
    alert ("winer winer chicken dinner")
    return true;
  }
}


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
