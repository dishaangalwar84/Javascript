let boxes=document.querySelectorAll(".box");
let  resetbtn=document.querySelector("#reset_btn");
let newGameButton=document.querySelector("#new_btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container")
let msgDraw=document.querySelector(".msg-draw");
let msg1=document.querySelector("#msg1");
let newBtn=document.querySelector("#new_btn1");

let turnO=true;
let count=0;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame=()=>{
     turnO=true;
    enablebtns();
    msgContainer.classList.add("hide");
    count=0;
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO===true)
        {
            box.innerText="O";
            turnO=false; 
        }
        else{
            box.innerText="X";
            turnO=true; 
        }
        count++;
        box.disabled=true;
        let wins=checkWinner();
        if(wins===false){
        checkDraw();
        }
    });
});

 const disablebtns=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
 }
 const enablebtns=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
 }
 const showWinner=(winner)=>{
    msg.innerText=`winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtns();
 }
 const showDraw=()=>{
    msg1.innerText="Draw Game";
    msgDraw.classList.remove("hide");
    disablebtns();
 }
const checkWinner=()=>{
    for(let pattern of winPatterns)
    {
       
           let pos1Value= boxes[pattern[0]].innerText;
            let pos2Value= boxes[pattern[1]].innerText;
           let pos3Value= boxes[pattern[2]].innerText;
             if(pos1Value !=""&& pos3Value!=""&& pos2Value!="")
             {
                if(pos1Value===pos2Value && pos2Value===pos3Value)
                {
                   showWinner(pos1Value);
                   return true;
                }
             }
    }
    return false;
}
const checkDraw=()=>{
    if(count===9)
    {
        showDraw();
    }
}



newGameButton.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
