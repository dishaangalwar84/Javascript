
let addprojectbtn=document.querySelector("#add-project-btn");
let projetform=document.querySelector("#project-form");
let projecttitle=document.querySelector("#project-title");
let projectdescription=document.querySelector("#project-description");
let submitbtn=document.querySelector("#create-project-btn");
let canclebtn=document.querySelector("#cancel-project-btn");
let projectlist=document.querySelector("#project-list");
let projectdetails=document.querySelector("#project-details");
let selectprojecttitle=document.querySelector("#selected-project-title");
let selectprojectdescription=document.querySelector("#selected-project-description");
let addprojecttaskbtn=document.querySelector("#add-project-task-btn");
let projecttaskinput=document.querySelector("#project-task-input");
let projecttasklist=document.querySelector("#project-task-list");
let resetprojecttaskbtn=document.querySelector("#reset-project-tasks-btn");
addprojectbtn.addEventListener("click",()=>{
    projetform.hidden=false;
});

projetform.addEventListener("submit", (event) => {
    event.preventDefault();
    projectlist.hidden=false;
    let li=document.createElement("li");
    let h3=document.createElement("h3");
    h3.textContent=projecttitle.value;
    let p=document.createElement("p");
    p.textContent=projectdescription.value;
    li.append(h3);
    li.append(p);
    projectlist.append(li);
    li.classList.add("project-card");
    projetform.hidden=true;
    li.addEventListener("click",()=>{
        projectdetails.hidden=false;
        projectlist.hidden=true;
        selectprojecttitle.textContent=projecttitle.value;
        selectprojectdescription.textContent=p.textContent;
    });


    addprojecttaskbtn.addEventListener("click",()=>{
    if(projecttaskinput.value!="")
    {
        let classline=false;
        let li=document.createElement("li");
        let doneBtn = document.createElement("button");
        doneBtn.className = "done-btn";
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        let task=document.createElement("span");
        task.textContent=projecttaskinput.value;
        li.append(doneBtn);
        li.append(task);
        li.append(deleteBtn);
        projecttasklist.append(li);
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
        projecttaskinput.value="";
    }
});
});

resetprojecttaskbtn.addEventListener("click",()=>{
    projecttasklist.replaceChildren();
});


