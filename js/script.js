let x = document.querySelector(".X");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// count plays

let player1 = 0;
let player2 = 0;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        let el = checkEl(player1, player2);

        //verify if x or o exist

        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            // computing play
            if (player1 == player2) {
                player1++;

                if (secondPlayer == 'player-ai') {
                    //function play 
                    botPlay();
                    player2++;

                }

            } else {
                player2++;
            }

            // check who win

            checkWinConditon();

        }

    });

}

// 2 players or BOT IA?

for (let i = 0; i < buttons.length; i++)

    buttons[i].addEventListener("click", function () {
        secondPlayer = this.getAttribute("id");

        for (let j = 0; j < buttons.length; j++)
            buttons[j].style.display = 'none';

        setTimeout(function () {

            let container = document.querySelector("#container")
            container.classList.remove("hide")
        }, 500);

    });

//check who plays

function checkEl(player1, player2) {

    if (player1 == player2) {
        el = x;
    } else {
        el = o;
    }
    return el;
}

function checkWinConditon() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'X' && b2Child == 'X' && b3Child == 'X') {
            //x
            declareWinner('X');
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            //o
            declareWinner('o');
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'X' && b5Child == 'X' && b6Child == 'X') {
            //x
            declareWinner('X');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            //o
            declareWinner('o');
        }
    }
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'X' && b8Child == 'X' && b9Child == 'X') {
            //x
            declareWinner('X');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            //o
            declareWinner('o');
        }
    }

    // vertical

    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'X' && b4Child == 'X' && b7Child == 'X') {
            //x
            declareWinner('X');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            //o
            declareWinner('o');
        }
    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'X' && b5Child == 'X' && b8Child == 'X') {
            //x
            declareWinner('X');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            //o
            declareWinner('o');
        }
    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'X' && b6Child == 'X' && b9Child == 'X') {
            //x
            declareWinner('X');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            //o
            declareWinner('o');
        }
    }

    //diagonal

    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'X' && b5Child == 'X' && b9Child == 'X') {
            //x
            declareWinner('X');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            //o
            declareWinner('o');
        }
    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'X' && b5Child == 'X' && b7Child == 'X') {
            //x
            declareWinner('X');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            //o
            declareWinner('o');
        }
    }

    // a tie
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++
        }
    }

    if (counter == 9) {
        declareWinner('Deu velha!')
    }
}

/* clean the game, declate the winner and att score*/

function declareWinner(winner) {

    let scoreboardX = document.querySelector("#score-1");
    let scoreboardY = document.querySelector("#score-2");
    let msg = '';

    if (winner == 'X') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!"
    } else if (winner == 'o') {
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "O jogador 2 venceu!"
    } else {
        msg = "Deu velha!"
    }

    //show msg

    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    // hide msg
    setTimeout(function () {
        messageContainer.classList.add("hide");
    }, 3000);

    player1 = 0;
    player2 = 0;

    //remove x and o
    let boxesToRemove = document.querySelectorAll(".box div");

    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }


}

function botPlay() {

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for (let i = 0; i < boxes.length; i++) {

        let randomNumber = Math.floor(Math.random() * 5);

        if (boxes[i].childNodes[0] == undefined) {
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break
            }
        } else {
            filled++;
        }

    }

    if (counter == 0 && filled) {
        botPlay();
    }

}