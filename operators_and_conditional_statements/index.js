// ARITHMETIC OPERATORS
// let a=2;
// let b=2.0;
// console.log("Addition:",a+b);
// console.log("Substraction:",a-b);
// console.log("Multiplication:",a*b);
// console.log("Division:",a/b);
// console.log("Remainder",a%b);
// console.log("Power:",a**b);

// UNARY OPERATORS
// console.log("Increment:",a++);
// console.log(a);
// console.log("Decrement:",a--);
// console.log(a);
// first it will print the value  of a then will perform the operations on a (i.e. the increment and decrement)

// ASSIGNMENT OPERATORS
// a+=b;
// console.log("Addition assign",a);
// a-=b;
// console.log("Substraction:",a);
// a*=b;
// console.log("Multiplication:",a);
// a/=b;
// console.log("Division:",a);
// a%=b;
// console.log("Remainder:",a);
// a**=b;
// console.log("Power:",a);

// COMPARASION OPERATORS
// let c=5;
// console.log(a==b);
// console.log(a===b);  
// this has come true because both are number (in  js there is no such thing as int and float) 
// if one of them would have been a string then this will come out to be false 
// console.log(a!=b);
// console.log(a!==b);
// console.log(c>a);
// console.log(a>=b);
// console.log(c<b);
// console.log(a<=b);

// LOGICAL OPERATOR
// let a=true;
// let b=false;
// console.log(a&&b);
// console.log(a||b);


// CONDITIONAL STATEMENTS
// IF-ELSE
// let age=25;
// if(age>18)
// {
//     console.log("the person can vote");
// }
// else 
// {
//     console.log("the person cannot vote");
// }

// ELSE-IF
// if(age<18)
// {
//     console.log("junior");
// } else if(age>60)
// {
//     console.log("senior");
// }
// else{
//     console.log("middle aged");
// }

// TERNARY OPERATOR
// let result=age>10?"can vote":"cannot vote";
// console.log(result);

// PRACTICE QUESTIONS
let number=prompt("enter the number:");
if(number%5===0)
{
    console.log("number is divisible by 5");
}
else{
    console.log("number is not divisible by 5");
}

