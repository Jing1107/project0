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
}); // make h1 colorful

const board =["-", "-", "-",
          "-", "-", "-",
          "-", "-", "-" ];

let turnsPlayed = 0;
let playerOne = true;
let player1 = "X";
let player2 = "O";

const xPlayer = function (num) {
   board[num] = player1;
}

const oPlayer = function (num) {
  board[num] = player2;
};

const renderToScreen = function ( boxId ){   //put contecnt into board
  for (var i = 0; i < board.length; i++) {
    $('#' + i).text(board[i])
    //console.log (board[i])
  } //liesten click
}

const playTurn = function(num) {
  if (board [num] === player1 || board [num] === player2) { //check is there x or o in cureent board, if there is x or o in board,
    return ;        // you cannot change to other value.
  }

  if (playerOne) { //player x turn, when value is true will go to next line.
    board [num] = player1;
    $('#player')[0].play();
    renderToScreen ();
    turnsPlayed = turnsPlayed + 1;
    playerOne = false
    checkForWin (player1)

  // if (board[num] === " ") {
  // if (playerOne === true ) {
  // xPlayer(num);
  // turnsPlayed += 1;
  // playerOne = false;


    if ( turnsPlayed  === 9 && (checkForWin(player1) !== true) ){
      //alert("Oh no, it's a draw")
      $('#draw')[0].play();
      $('.draw').text("Oh no, it's a draw").fadeIn().fadeOut(5000)
    }

  } else {
    board [num] = player2;
    $('#player')[0].play();
    renderToScreen ();
    turnsPlayed = turnsPlayed + 1;
    playerOne = true
    checkForWin (player2)

    // oPlayer(num);
    // turnsPlayed += 1;
    // playerOne = true;
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
    //$('.winner').text(`${player1} WINS !`)
    $('#winner')[0].play();
    $('.winner').html(`${player1} is winner!`).fadeIn().fadeOut(5000);
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
    //$('.winner').text(`${player2} WINS !`)
    $('#winner')[0].play();
    $('.winner').html(` ${player2} is winner!`).fadeIn().fadeOut(5000);

    return true;

  } else {
    return false;
  }

};

const reset = function (){ // reset game
  // board =["-", "-", "-",
  //           "-", "-", "-",
  //           "-", "-", "-" ];
  // turnsPlayed = 0; // clear origin playturn
  // renderToScreen();
  location.reload();
};

$(document).ready( function() { //主程序，当玩家点击任意board的时候，运行playturn的function，直到该function结束。
  //console.log("ready");
  $('#x').click (function () {
    player1 = 'X'
    player2 = 'O'
  })

  $('#o').click (function () {
    player1 = 'O'
    player2 = 'X'
  })

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
  // $('#X').click( function (){
  //   xPlayer()
  // })
  // $('#O').click( function (){
  //   oPlayer()
  // })
})
