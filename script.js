let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newGameButton = document.querySelector("#newGame");
let newGameButton2 = document.querySelector("#newGame2")
let msgContainer = document.querySelector(".msgContainer");
let msgContainer2 = document.querySelector(".msgContainer2");
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    msgContainer2.classList.add("hide2");
    count = 0;
};

const drawGame = () => {
    msg.innerText = "Draw Game";
    msgContainer2.classList.remove("hide2");
    console.log("Draw");
}

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        console.log(count);

        win = checkWinner();
        if(win === "X" || win === "O"){
            showWinner(win);
        } else if(win === false) {
            drawGame();
        }
        console.log(win);
    });
});


const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val) {
                    return pos1Val;
                } else if(count === 9){
                    return false;
                }
            }
        }
};

newGameButton.addEventListener("click", resetGame);
newGameButton2.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);