// VARIABLE DECLARATION
let name="Disha";
console.log(name);
const interestRate=0.3;
// interestRate=1;
console.log(interestRate);
let isApproved=true;
let user=null; 
// we inilize the variable to null when we know that there will be a value but that is not yet known

// OBJECT  DECLARATION
let person={
    name1:'disha',
    age:20
};
 person.name1="apeksha";

//  ACCESSING USING THE  DOT METHOD
 console.log(person.name1);
//  here the name1 attribute of the person object got altered

// ACCESSING USING THE BRACKET METHOD
let selection='name1';
person['name1']='mary';
person[selection]='apeksha'
console.log(person.name1);
// bracket method is used when there is space between the attribute names.

// ARRAYS
let selectedColors= ['red','blue','green'];
 selectedColors[3]= 1;
 console.log(selectedColors);

//  FUNCTION DECLARATION
function greet(name2){
    console.log("hi "+name2);
 }
 greet("disha");

 // OOP'S
 // calculation wages with normal way
 let baseSalary=1000;
let overtime=10;
let rate =0.3;
function getWage(baseSalary,overtime,rate)
{
    return baseSalary+(overtime*rate);
}
// oop's way of calculating wages
let employee={
     baseSalary:1000,
    overtime:10,
    rate:0.3,
getWage: function()
{
    return this.baseSalary+(this.overtime*this.rate);
}
};
console.log(employee.getWage());




