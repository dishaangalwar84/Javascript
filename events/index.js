// EVENTS
// 1. agar humne inline event handle kiya ho aur same js mai bhi
// kiya ho toh js wala event handle hoga.
// 2. hum ek he event ko 2 baar handle nahi kar sakte hai agar kiya
// toh phele wala override ho jaega
let btn1=document.querySelector("#btn1");
// btn1.onclick=(e)=>
// {
//     console.log(e);
//     console.log("button was clicked");
    // alert("hi buddy you clicked button");
// }
// let btn2=document.querySelector("#btn2");
// btn2.ondblclick=()=>
// {
//     alert("hii buddy you doubled clicked the button")
//  }
// let div1=document.querySelector("#div1");
// div1.onmouseover=()=>
// {
    // alert("you are inside div");
// }
// iska drawback ye hai ki hum ek tag ke liye ek he baar
// event create kar sakte hai hence we use even lisners

// btn1.addEventListener("click",(evt)=>{
//     alert("hii buddy you clicked the button");
//     console.log(evt);
// });
// btn1.addEventListener("click",()=>{
//     console.log("hii buddy you clicked the button");
// });
// in this case hello bhi print hoke aaega(inline js) aur
// alert bhi ye js wali even handeling mai possible nahi tha
// aur hum ek he tag ka 2 baar event handler bhi bana sakte hai
// let handler3=()=>{
//     console.log("hii buddy you clicked the button (handler 3)");
// }
// btn1.addEventListener("click",handler3);
//  btn1.removeEventListener("click",handler3);
//  agar humne lagta hai ki humne kisi bhi event handler ko
// remove karna padega toh hum usko kisi ek variable mai store
// kar dete hai.

// Q1 
let mode=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light";
mode.addEventListener("click",()=>{
    if(currMode==="light")
    {
        currMode="dark";
       body.classList.add("dark");
       body.classList.remove("light");
    }
    else
    {
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});
