let projectnav=document.querySelector("#projects-nav");
let dailynav=document.querySelector("#daily-nav");
let projectpage=document.querySelector("#projects-page");
let dailypage=document.querySelector("#daily-page");
dailynav.addEventListener("click",()=>{
    dailypage.hidden=false;
    projectpage.hidden=true;
});
projectnav.addEventListener("click",()=>{ 
        projectpage.hidden=false;
        dailypage.hidden=true;
});



