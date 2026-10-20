// jab hum alert use karte hai tab wo pura page wait karta hai 
// jab tak user ok pe click nahi karta toh wo html and css execute 
// nahi hota hai
// window object is browsers object(not js's) and is automatically
// created by the browser
// html ke jitne bhi components hote hai wo js mai aake 1 object mai
// store ho jate hai aur usko he hum DOM bolte hai
// aur ye document object windows object mai present hota hai
// console.log() is kuch print karne ke liye use karte hai par
// console.dir() ek object ke properties and methods ko  print karne ke liye bhi use karte hai



// let head= document.getElementById("heading"); //h1
// console.dir(head);

// let head1=document.getElementsByClassName("headclass");
// console.log(head1);
// console.dir(head1);

// let para=document.getElementsByTagName("p");
// console.log(para);
// console.dir(para);

// we can access the data using all these methods but there is 
// a more better way and that is by using the querySelector()

// DOM PROPERTIES
// tagName-> returns tag name
// innerText-> returns text content of the element and its children
// innerHtml-> returns plain text or HTML contents in the element
// textContent-> returns text content even for hidden elements

// DOM MANIPULATION ON ATTRIBUTES
//  let div=document.querySelector("div");
// console.log(div);
// let value=div.getAttribute("id");
// console.log(value);
// console.log(div.setAttribute("id","div2"));

// node style
// div.style.backgroundColor="red";
// div.innerText="hii disha";

// insertion and deletion of elements
// node.appent()-> adds at the end of the node(inside)
// node.prepend()->adds at the start of the node(inside)
// node.before()-> adds at the end of the node(outside)
// node.after()->adds at the start of the node(outside)

let newBtn=document.createElement("button");
newBtn.innerText="click me!";
let div=document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);


