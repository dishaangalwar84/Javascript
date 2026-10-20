// CONSTRUCTOR 
 function Circle(radius)
{
    if(!new.target)
    {
        throw Error("create the object using the new keyword");
    }
    console.log("this",this);
    this.radius,
    this.draw=function()
    {
        console.log("draw  circle");
        return "disha";
        // here if we don't return anything then we get undefined after "draw circle"
    }
}
const another= new Circle(2);
console.log(another);
console.log(another.draw());

// PROTOTYPE/INHERITENCE
function Book(title,author,pages)
{
    if(!new.target)
    {
        throw Error("create the object using the new keyword");
    }
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read="read";
    this.info=function()
    {
        console.log(this.title+"by "+this.author+"with "+this.pages+"pages person is "+(this.read? "read ":"not reading "));
    };
}
const book1= new Book("it ends with us","coolen hoover",300);
console.log(book1.info());
console.log(book1);

function Player(name, marker) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name);
};
Player.prototype.sayName1 = function() {
    console.log("my name is:",this.name);
  };
}
const player1= new Player("disha","X");
 const player2= new Player("apeksha","O");
//  when the objects are created using the Player constructor then a player prototype is also created
// that is accessible to all the objects those are mode using the Player constructor
//  JavaScript creates player1 and links its internal [[Prototype]] to Player.prototype, 
//  so if JavaScript can't find a property or method on player1, it can look in Player.prototype for it.
// Player.prototype is an object that is used as the prototype for objects created with new Player().
 console.log(Object.getPrototypeOf(player1) === Player.prototype); 
 console.log(Object.getPrototypeOf(player2) === Player.prototype); 
//  getPrototypeOf() gives the prototype of that particular object i.e. here player1 has prototype as Player prototype 
// becaused it is made using the Player constructor
  console.log(player1.sayName1());
  console.log(player2.sayName1());
  console.log(Object.getPrototypeOf(Player.prototype));
  console.log(player1.valueOf());
  console.log(player1.hasOwnProperty());

  function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}
Player.prototype.getMarker = function() {
    console.log(`My marker is "${this.marker}"`);
};
Object.setPrototypeOf(Player.prototype, Person.prototype);
// here the player can access the properties of the person

// ADDING THE PROPERTIES TO THE OBJECT AFTER CREATING IT (IN RUNTIME)
function Circle(radius)
{
    if(!new.target)
    {
        throw Error("create the object using the new keyword");
    }
    console.log("this",this);
    this.radius,
    this.draw=function()
    {
        console.log("draw  circle");
        return "disha";
    }
}
Circle.location={x:1};
console.log(Circle.location);
const propertyName= 'center locaton';
Circle['center location']={x:2};
console.log(Circle['center location']);