

// Variables 
// ORIGINAL COUNTDOWN NUMBER = 21
// COUNTDOWN COUNTER
// PLAYER OR AI TURN 
// CAN CHOOSE 1, 2, 3 (BUTTONS IN HTML)

    // SHOULD BE BREAK DOWN 1 INTO -1      2 INTO -1 ,  -1       3 INTO -1, -1, -1       FOR EASIER 21* GOAL HIT
// 
//

// MVP GOALS
// CREATE BASIC GAME
// ABILITY TO CHOOSE EASY/BLIND MODE



// STRETCH GOALS
// ABILITY TO PLAY MASTER MODE COMPUTER
// CSS: PICTURE OF GOLLUM : 
// RESTART BUTTON:
// ABILITY TO CHOOSE STARTING POINT AND MAYBE SLIGHT CHANGE IN CHOICE IN TAKING ie(1,2,3,4,5) (HAVE TO BE ABLE TO CHOOSE STARTING PLAYER/AI TOO: ALOT MORE ALGORITHMIC )


let startNumber = 21;

let playerTurn= true;


// PLAYER TURN
console.log("The current count is " + startNumber + ".");
const gameCount = {
    currentNumber: startNumber,
    nimNumber: "",
    // actions = {

        decreaseThree: function() {
            this.currentNumber = this.currentNumber - 3
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

        decreaseThree: function () {
            this.currentNumber = this.currentNumber - 2
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
            if (this.currentNumber === 0) {
                console.log("You win")
                alert("You now possess the 'One Ring'")
            } else {
                console.log("The count is now " + this.currentNumber + ".")
                playerTurn = false;
        }
    }
    // }

}
/// AI TURN :EZ 

// if playerTurn:false?;
const easyAI = {
    turn: function () {
        let randomNumber = (Math.floor(Math.random() * 3) + 1)


        gameCount.currentNumber = gameCount.currentNumber - randomNumber;
        console.log("The count is now " + gameCount.currentNumber + ".")
        console.log("Gollum has made his move, it is now your turn.");
        playerTurn = true;
    }
}


/// AI TURN : MASTER
const masterAI = {
    nimCount: "",
    master: "master"
}
