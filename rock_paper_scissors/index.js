let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const userScores=document.querySelector("#user-score");
const compScores=document.querySelector("#computer-score");
const message=document.querySelector("#message");
const reset=document.querySelector("#reset-btn");
 const compWin=()=>{
    compScore++;
   compScores.innerHTML=compScore;
   message.innerHTML="you lost";
 }
const userWins=()=>{
    userScore++;
   userScores.innerHTML=userScore;
   message.innerHTML="you won this game!";
}
const draw=()=>{
    message.innerHTML="Draw Game";
}
const genCompChoice=()=>{
    const options=["rock","paper","sicssor"];
    const romChoice=Math.floor(Math.random()*3);
    return options[romChoice];
}
const playGame=(userChoice)=>{
    // computer choice generation
    const compChoice=genCompChoice();
    if(userChoice===compChoice)
    {
        draw();
    }
    else if(compChoice==="rock" && userChoice==="paper")
    {
        userWins();
    }
    else if(compChoice==="paper" && userChoice==="rock")
    {
        
        compWin();
    }
    else if(compChoice==="rock" && userChoice==="sicssor")
    {
        
        compWin();
    }
    else if(compChoice==="sicssor" && userChoice==='rock')
    {
        
        userWins();
    }
    if(compChoice==="paper" && userChoice==="sicssor")
    {
        userWins();
    }
    else if(compChoice==="sicssor" && userChoice==="paper")
    {
        compWin();
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       playGame(userChoice);
    });
});

reset.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    compScores.innerHTML=0;
     userScores.innerHTML=0;
    message.innerHTML="Play your move";

});