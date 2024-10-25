let boxes = document.querySelectorAll(".box");
let resbtn = document.querySelector("#reset");
let ngb=document.querySelector("#new-game-btn");
let msgcnt=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let anchor=document.querySelector(".anchor")
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
//Add Evnet Listioner on each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    //disable button : so that when we click again it can't change
    box.disabled = true;
    checkWinner();
  });
});

const showWinner=(winner)=>{
    msg.innerText=`congratulation ,winner is ${winner}`;
    msgcnt.classList.remove("hide")
    disableBoxes();
};
const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled="true"
    }
}


const checkWinner = () => {
  for (let pattern of winPatterns) {
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2]].innerText;

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) 
        {
            showWinner(pos1Val);
      }
    }
  }
};
