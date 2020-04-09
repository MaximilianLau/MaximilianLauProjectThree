let playerTurn = false;
let startNumber;
// Adding Visibility instead of Toggle for certain elements 
$.fn.invisible = function () {
    return this.each(function () {
        $(this).css("visibility", "hidden");
    });
};
$.fn.visible = function () {
    return this.each(function () {
        $(this).css("visibility", "visible");
    });
};

// Adding parallax Mouse scroll 
$(window).scroll(function () {
    const parallaxScroll = $(this).scrollTop();

    $('.bg1').css({
        'transform': 'translate(0,' + parallaxScroll / 5 + '%)'
    })
    $('.bg2').css({
        'transform': 'translate(0,' + parallaxScroll / 10 + '%)'
    })
    $('.bg3').css({
        'transform': 'translate(0,' + parallaxScroll / 15 + '%)'
    })
    $('.bg4').css({
        'transform': 'translate(0,' + parallaxScroll / 20 + '%)'
    })
    $('.bg5').css({
        'transform': 'translate(0,' + parallaxScroll / 200 + '%)'
    })
    $('.logo').css({
        'transform': 'translate(0,' + parallaxScroll / 20 + '%)'
    })
})


function startGameToggle() {
    $('button.startToggle').toggle();
    $('button.startToggleOff').toggle();
}

function restartGame() {
    $('button.startToggle').toggle();
    $('button.restartGame').toggle();
    $('.pixelart-to-css3').hide();
    $('.pixelart-to-css4').hide();
    $('.pixelart-to-css2').visible();
}


// EASY AI
function startGameEasy() {
    $('button.startToggleOff').toggle();
    $('button.playerDecrease').toggle();
    startNumber = prompt('How many rings are in the barrel?'); 
    startNumber= parseFloat(startNumber)
    if (startNumber % 1 != 0 ){
        alert('Sneaky little hobbitses.');
        $('button.startToggle').toggle();
        $('button.playerDecrease').toggle();
    } else {
    $('#shownCount').html(startNumber)
    playerTurn = false;
    easyAI();
    return startNumber;
    } 
}

// decides EASY AI MOVE 
function easyAI() {
    if (playerTurn === false) {
    setTimeout(function () {
        let randomNumber = (Math.floor(Math.random() * 3) + 1)
        startNumber = startNumber - randomNumber;
        $('#shownCount').html(startNumber)
            if (randomNumber === 1) {
                if (startNumber <= 0) {
                    $('#turnChange').html('Gollum has taken the last ring!')
                    $('#countChange').html('You lose!')
                    $('.pixelart-to-css3').show();
                    $('.pixelart-to-css4').show();
                    $('.pixelart-to-css2').invisible();
                    $('button.playerDecrease').toggle();
                    $('button.restartGame').toggle();
                    $('#shownCount').html(0);
                } else {
                    $('#turnChange').html('Gollum has made his move, he has taken ' + randomNumber + ' ring.')
                    $('#countChange').html('There are ' + startNumber + ' remaining.')
                    playerTurn = true;
                }    
            } else if (randomNumber >=1) {
                if (startNumber <= 0) {
                    $('#turnChange').html('Gollum has taken the last ring!')
                    $('#countChange').html('You lose!')
                    $('.pixelart-to-css3').show();
                    $('.pixelart-to-css4').show();
                    $('.pixelart-to-css2').invisible();
                    $('button.playerDecrease').toggle();
                    $('button.restartGame').toggle();
                    $('#shownCount').html(0);
                } else {
                    $('#turnChange').html('Gollum has made his move, he has taken ' + randomNumber + ' rings.')
                    $('#countChange').html('There are ' + startNumber + ' remaining.')
                    playerTurn = true;
                }
            }
        }, 1500);
    }
}
function playerDecrease(x) {
    if (playerTurn === true && startNumber >= 1) {
    startNumber = startNumber - x 
    $('#shownCount').html(startNumber);
        if (x === 1) {
            if (startNumber <= 0) {
                $('#turnChange').html('You have taken the last ring!')
                $('#countChange').html('You Win!')
                $('button.playerDecrease').toggle();
                $('button.restartGame').toggle();
                $('#shownCount').html(0);
            } else {
                $('#turnChange').html('You have removed ' + x + ' ring from the barrel.')
                $('#countChange').html('There are ' + startNumber + ' rings remaining.')
                playerTurn= false;
                easyAI();
          }   
        }  else if (x >=1) {
            if (startNumber <= 0) {
                $('#turnChange').html('You have taken the last ring!')
                $('#countChange').html('You Win!')
                $('button.playerDecrease').toggle();
                $('button.restartGame').toggle();
                $('#shownCount').html(0);
            } else {
                $('#turnChange').html('You have removed ' + x + ' rings from the barrel.')
                $('#countChange').html('There are ' + startNumber + ' rings remaining.')
                playerTurn = false;
                easyAI();
            }
        }
    }
}
// MASTER AI 
function startGameMaster() {
    $('button.startToggleOff').toggle();
    $('button.playerDecreaseM').toggle();
    startNumber = prompt('How many rings are in the barrel?');
        startNumber = parseFloat(startNumber)
    if (startNumber % 1 != 0) {
        alert('Sneaky little hobbitses!')
        $('button.startToggle').toggle();
        $('button.playerDecreaseM').toggle();
    } else {
        $('#shownCount').html(startNumber)
        playerTurn = false;
        masterAI();
        return startNumber;
    }
}

// DECIDES MASTER AI MOVE 

function masterAI() {
    if (playerTurn === false) {
        setTimeout(function () {
            console.log(startNumber)
            if (startNumber  % 4 === 1) {
                startNumber = startNumber  - 1
                $('#shownCount').html(startNumber);
                if (startNumber  === 0) {
                    $('#turnChange').html('Gollum has taken the last ring!')
                    $('#countChange').html('You lose!')
                    $('button.playerDecreaseM').toggle();
                    $('button.restartGame').toggle();
                } else {
                    $('#turnChange').html('Gollum has made his move, he has taken 1 ring.')
                    $('#countChange').html('There are ' + startNumber + ' remaining.')
                    playerTurn = true;
                }
            } else if (startNumber  % 4 === 2) {
                startNumber = startNumber  - 2
                $('#shownCount').html(startNumber);
                if (startNumber  === 0) {
                    $('#turnChange').html('Gollum has taken the last ring!')
                    $('#countChange').html('You lose!')
                    $('button.playerDecreaseM').toggle();
                    $('button.restartGame').toggle();
                } else {
                    $('#turnChange').html('Gollum has made his move, he has taken 2 rings.')
                    $('#countChange').html('There are ' + startNumber + ' remaining.')
                    playerTurn = true;
                }
            } else if (startNumber % 4 === 3) {
                startNumber = startNumber - 3 
                $('#shownCount').html(startNumber)
                if (startNumber === 0) {
                    $('#turnChange').html('Gollum has taken the last ring!')
                    $('#countChange').html('You lose!')
                    $('button.playerDecreaseM').toggle();
                    $('button.restartGame').toggle();
                } else {
                    $('#turnChange').html('Gollum has made his move, he has taken 3 rings.')
                    $('#countChange').html('There are ' + startNumber + ' remaining.')
                    playerTurn = true;
                }
            } else if (startNumber % 4 === 0) {
                startNumber = startNumber - 4
                $('#shownCount').html(startNumber)
                if (startNumber === 0) {
                    $('#turnChange').html('Gollum has taken the last ring!')
                    $('#countChange').html('You lose!')
                    $('button.playerDecreaseM').toggle();
                    $('button.restartGame').toggle();
                } else {
                    $('#turnChange').html('Gollum has made his move.')
                    $('#countChange').html('There are ' + startNumber + ' remaining.')
                    playerTurn = true;
                }
            }
        }, 1500);
    }
}
function playerDecreaseM(x) {
    if (playerTurn === true && startNumber >= 1) {
        startNumber = startNumber - x
        $('#shownCount').html(startNumber);
        if (x === 1) {
            if (startNumber <= 0) {
                $('#turnChange').html('You have taken the last ring!')
                $('#countChange').html('You Win!')
                $('button.playerDecreaseM').toggle();
                $('button.restartGame').toggle();
                $('#shownCount').html(0);
            } else {
                $('#turnChange').html('You have removed ' + x + ' ring from the barrel.')
                $('#countChange').html('There are ' + startNumber + ' rings remaining.')
                playerTurn = false;
                masterAI();
            }
        } else if (x >= 1) {
            if (startNumber <= 0) {
                $('#turnChange').html('You have taken the last ring!')
                $('#countChange').html('You Win!')
                $('button.playerDecreaseM').toggle();
                $('button.restartGame').toggle();
                $('#shownCount').html(0);
            } else {
                $('#turnChange').html('You have removed ' + x + ' rings from the barrel.')
                $('#countChange').html('There are ' + startNumber + ' rings remaining.')
                playerTurn = false;
                masterAI();
            }
        }
    }
}