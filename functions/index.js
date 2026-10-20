// FUNCTIONS
// a block of code that performs a specific task and can we ivoked whenever necessary
// function myFunction()
// {
//     console.log(`i am learning js`);
// }
// myFunction();;

// 1. Normal method
// function sum(a,b)
// {
//     console.log(`sum is ${a+b}`);
//     return 0;
// }
// function parameters act like the local variable of functions
// sum(2,3);

//  2. Arrow Method
// const sum=(a,b)=>{
//     console.log(a+b);
// };
// sum(2,3);

// PRACTICE QUESTIONS
// function vowels(word)
// {
//     let count=0;
//     for(let i in word)
//     {
//         if(word[i]==='a'||word[i]==='e'||word[i]==='i'||word[i]==='u'||word[i]==='o')
//         {
//             count++;
//         }
//     }
//     console.log(`There are total ${count} number of vowels`);
// }
// vowels("disha");

// for-each loop is also used to iterate on arrays along with for of (both are considered as good practice)
// jab kisi function ko hum kisi object ke saath associate kar dete hai toh wo ek method bann jata hai
// hum kisi function ko parameter ke tarha bhi use kar sakte hai

// FOR-EACH LOOP IN ARRAY
let arr=[1,2,3,4];
// arr.forEach(function print(val)
// {
//     console.log(val);
// });

// arr.forEach((val)=>
// {
//     console.log(val);
// });
// higher order functions are those functios those take other functions as a parameter ya phir return kar rahe hote hai
// like callback function in the forEach loop
// arr.forEach((val)=>
// {
//     let sq;
//     sq=val*val;
//     console.log(sq);
// });

// MAPS
// this is similar to forEach but it creates a new array of the results that the call pack function is performing
// let newArray=arr.map((val)=>{
//     return val;
// });
// console.log(newArray);

// FILTER
// creates the new array by filtering out the new values according to the given condition
// let newArray=arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(newArray);

// REDUCE
// it performs some operations and then returns a single value as the answer of that operation (like sum,avg all these give single value as the answer)
// let sumArray= arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(sumArray);
// here at first there is 1 in res and 2 in curr then we did return res+curr so it adds(1+2) and stores that in res 
// i.e. now 3 is stored in res like this it keeps iterating over the entire array and then at the end stores a single 
// value in the sumArray(i.e. here 10)

let a=[5,6,2,1,3,7];
let max=a.reduce((res,curr)=>{
    if(res>curr)
    {
        return res;
    }else{
        return curr;
    }
});
console.log(max);







