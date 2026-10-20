// a js object have state and behaviour(properties and methods)
// js object have a special called prototype
// imp: if object and prototype have same method then object's method will be used
// const student={
//     fullName:"disha angalwar",
//     marks:94.4,
//      printMarks:()=>{
//         console.log(marks);
//     }
// }
// console.log(student);

// PROTOTYPES
// const employee={
//     fullName:"disha angalwar",
//     calculateTax(){
//         console.log("the tax is 10%");
//     },
// }
// const karanArjun={

// }
// karanArjun.__proto__=employee;
// console.log(karanArjun.calculateTax);

// CLASSES
// classes is a  bluprint to create an object
// class toyotaCar{
//     constructor(brand)
//     {   
//         this.brand=brand;
//         console.log("creating new object");
//     }
//     start()
//     {
//         console.log("start");
//     }
//     stop()
//     {
//         console.log("stop");
//     }
    // setBrand(brand)
    // {
    //     this.brandName=brand;
    // }
// }
// let odi=new toyotaCar("odi");
// let lexes=new toyotaCar("lexus");

// CONSTRUCTOR
// special method in the class and it is ivoked by new(keyword)
// and it is an initilized object

// INHERITENCE
// inheritence is passing down the prarents properties
// to the chid.
// if the child and parent have the same mehtod then
// the method of child is used (method overrding)
// class parent{
//     hello(){
//         console.log("hii i am from parent class");
//     }
// }
// class child extends parent{}
// let disha=new child;
// console.log(disha.hello());

// super keyword is used to call the constructor of its
// parents class to access parent's properties and methods

// class person{
//     constructor()
//     {
//         this.species="homo sapeins";
//     }
//     eat()
//     {
//         console.log("the person eats");
//     }
// }
// class engineer extends person
// {
//     constructor()
//     {
//         // here we are writing super because before calling
//         // the constructor of the derived class we need to call
//         // the constructor of the parent class
//         super();
//         this.branch=branch;
//     }
//     work()
//     {
//         console.log("solve problems and builds");
//     }
// }
// let engObj=new engineer("cs engineer");

// class person{
//     constructor(name)
//     {
//         this.species="homo sapeins";
//         this.name=name;
//         console.log(name);
//     }
//     eat()
//     {
//         console.log("the person eats");
//     }
// }
// class engineer extends person
// {
//     constructor(name)
//     {
//         super(name);
//     }
//     work()
//     {
//         super.eat();
        // here first eat will be executed then work
//         console.log("solve problems and builds");
//     }
// }
// let engObj=new engineer("Disha");

// Error Handeling
