

// Variables 
// ORIGINAL COUNTDOWN NUMBER = 21
// COUNTDOWN COUNTER
// PLAYER OR AI TURN 
// CAN CHOOSE 1, 2, 3 (BUTTONS IN HTML)

    // SHOULD BE BROKEN DOWN 1 INTO -1      2 INTO -1 ,  -1       3 INTO -1, -1, -1       FOR EASIER 21* GOAL HIT
//              OR JUST         -1                  -2                  -3
//

// MVP GOALS
// CREATE BASIC GAME
// ABILITY TO CHOOSE EASY/BLIND MODE
// RESTART BUTTON
// ABILITY TO PLAY MASTER MODE COMPUTER


// STRETCH GOALS
// CSS: PICTURE OF GOLLUM : with bounce/etc animation
// ABILITY TO CHOOSE STARTING POINT AND MAYBE SLIGHT CHANGE IN CHOICE IN TAKING ie(1,2,3,4,5) (HAVE TO BE ABLE TO CHOOSE STARTING PLAYER/AI TOO: ALOT MORE ALGORITHMIC )
// ADD TIMER/ TIME LIMIT
// ABILITY TO ADD MORE BARRELS OF RINGS   

// ESTHER

let startNumber = 21;

let playerTurn= false;

let number = startNumber;


// PLAYER TURN
console.log("The current count is " + startNumber + ".");
const gameCount = {
    currentNumber: startNumber,
    decreaseThree: function() {
            this.currentNumber = this.currentNumber - 3
            document.getElementById("shownCount").innerHTML = this.currentNumber
            if (this.currentNumber <=  0) {
                console.log("You win")
                alert("You now possess the 'One Ring'")
            } else {
                console.log("The count is now " + this.currentNumber + ".")
                console.log("I see. Gollum's Turn.");
                playerTurn= false;
            }
        },
        // decreaseThree: function() {
        //     this.currentNumber = this.currentNumber - 1
        //     if (this.currentNumber === 0) {
        //         console.log("You win")
        //         alert("You now possess the 'One Ring'")
        //     } else {
        //         this.currentNumber = this.currentNumber -1 
        //         if (this.currentNumber === 0) {
        //             console.log("You win")
        //             alert("You now possess the 'One Ring'")
        //         } else {
        //             this.currentNumber = this.currentNumber - 1 
        //             if (this.currentNumber === 0) {
        //                 console.log("You win")
        //                 alert("You now possess the 'One Ring'")
        //             } else {
        //                 console.log("The count is now " + this.currentNumber + ".")
        //                 playerTurn = false;
        //              }
        //         }
        //     }
        // },

    decreaseTwo: function () {
        this.currentNumber = this.currentNumber - 2
        document.getElementById("shownCount").innerHTML = this.currentNumber
        if (this.currentNumber <= 0) {
            console.log("You win")
            alert("You now possess the 'One Ring'")
        } else {
            console.log("The count is now " + this.currentNumber + ".")
            console.log("I see. Gollum's Turn.");
            playerTurn = false;
        }
    },
        // decreaseTwo: function() {
        //     this.currentNumber = this.currentNumber - 1
        //     if (this.currentNumber === 0) {
        //         console.log("You win")
        //         alert("You now possess the 'One Ring'")
        //     } else {
        //         this.currentNumber = this.currentNumber - 1
        //         if (this.currentNumber=== 0) {
        //             console.log("You win")
        //             alert("You now possess the 'One Ring'")
        //         } else {
        //             console.log("The count is now " + this.currentNumber + ".")
        //             playerTurn = false;
        //         }
        //     }
        // },
    decreaseOne: function() {
        this.currentNumber = this.currentNumber - 1 
        document.getElementById("shownCount").innerHTML = this.currentNumber
        if (this.currentNumber <= 0) {
            console.log("You win")
            alert("You now possess the 'One Ring'")
        } else {
            console.log("The count is now " + this.currentNumber + ".")
            console.log("I see. Gollum's Turn.");
            playerTurn = false;
        }
    }

}
/// AI TURN :EZ 

// if playerTurn:false?;
const easyAI = {
    turn: function () {
        let randomNumber = (Math.floor(Math.random() * 3) + 1)
        gameCount.currentNumber = gameCount.currentNumber - randomNumber;
        document.getElementById("shownCount").innerHTML = gameCount.currentNumber
        if (gameCount.currentNumber === 0) {
            console.log('Gollum has taken the last ring!')
            alert('Gollum has taken the "One Ring" You lose!')
        } else {
            console.log("The count is now " + gameCount.currentNumber + ".")
            console.log("Gollum has made his move, it is now your turn.");
            playerTurn = true;
        }
    }
}


/// AI TURN : MASTER
const masterAI = {
    // nimCount: gameCount.currentNumber,
    master: "master",
    turn: function () {
        if (gameCount.currentNumber % 4 === 1 ) {
            gameCount.currentNumber = gameCount.currentNumber - 1
            document.getElementById("shownCount").innerHTML = gameCount.currentNumber
            if (gameCount.currentNumber === 0) {
                console.log('Gollum has taken the last ring!')
            alert('Gollum has taken the "One Ring" You lose!')
            } else {
                console.log("The count is now " + gameCount.currentNumber + ".")
                console.log("Gollum has made his move, it is now your turn.");
                playerTurn = true;
            }
        } else if (gameCount.currentNumber % 4 === 2) {
                gameCount.currentNumber = gameCount.currentNumber - 2
                document.getElementById("shownCount").innerHTML = gameCount.currentNumber
                if (gameCount.currentNumber === 0) {
                    console.log('Gollum has taken the last ring!')
                    alert('Gollum has taken the "One Ring" You lose!')
                } else {
                console.log("The count is now " + gameCount.currentNumber + ".")
                console.log("Gollum has made his move, it is now your turn.");
                playerTurn = true;
                }   
        } else if (gameCount.currentNumber % 4 === 3) {
                gameCount.currentNumber = gameCount.currentNumber - 3
                document.getElementById("shownCount").innerHTML = gameCount.currentNumber
                if (gameCount.currentNumber === 0) {
                    console.log('Gollum has taken the last ring!')
                    alert('Gollum has taken the "One Ring" You lose!')
                } else {
                    console.log("The count is now " + gameCount.currentNumber + ".")
                    console.log("Gollum has made his move, it is now your turn.");
                    playerTurn = true;
                }
        } else if (gameCount.currentNumber % 4 === 0    ) {
            gameCount.currentNumber = gameCount.currentNumber - 4
            document.getElementById("shownCount").innerHTML = gameCount.currentNumber
            if (gameCount.currentNumber === 0) {
                console.log('Gollum has taken the last ring!')
                alert('Gollum has taken the "One Ring" You lose!')
            } else {
                console.log("The count is now " + gameCount.currentNumber + ".")
                console.log("Gollum has made his move, it is now your turn.");
                playerTurn = true;
            }
        }
        

//DON"T TOUCH THESE
    }
}