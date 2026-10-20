
let todaymessage = document.querySelector("#message-input");
let nowbtn = document.querySelector("#now-btn");
let message = document.querySelector("#now-message");
let messagediv=document.querySelector("#message-div");
let items=document.querySelector("#items");
let addbtn=document.querySelector("#add_btn")
let tasklist=document.querySelector("#task-list");
let resetbtn=document.querySelector("#reset-btn");
nowbtn.onclick = () => {
    if (todaymessage.value.trim() !== "") {
        message.innerText = todaymessage.value;
        message.style.fontWeight = "bold";
        message.hidden = false;
        todaymessage.hidden = true;
        nowbtn.hidden = true;
    }
};
messagediv.onclick = () => {
    todaymessage.value = "";
    todaymessage.hidden = false;
    message.hidden = true;
    nowbtn.hidden = false;
};

addbtn.addEventListener("click",()=>{
    if(items.value!="")
    {
        let classline=false;
        let li=document.createElement("li");
        let doneBtn = document.createElement("button");
        doneBtn.className = "done-btn";
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        let task=document.createElement("span");
        task.textContent=items.value;
        li.append(doneBtn);
        li.append(task);
        li.append(deleteBtn);
        tasklist.append(li);
        doneBtn.addEventListener("click",()=>{
            if(classline===false)
            {
            task.classList.add('done');
            classline=true;
            }
            else
            {
                task.classList.remove('done');
                classline=false;
            }
        });
        deleteBtn.addEventListener("click",()=>{
           li.remove();
        });
        items.value="";
    }
});

resetbtn.addEventListener("click",()=>{
    tasklist.replaceChildren();
});










     