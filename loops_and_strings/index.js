// for(let i=1;i<=5;i++)
// {
//     console.log(i);
// }
// console.log(i);
// here we cannot access i because it is defined in the the loop so we can only access it in the loop
// same concept as c++ but agar mai var karke declare karti i ko toh wo har jagha availabe hota because var(global scope hai)

// FOR-OF LOOP
// this loop helps us iterate on strings and arrays
// let name="disha";
// for(let it of name)
// {
//     console.log(it);
// }

// FOR-IN LOOP
// we use for-in loop to iterate on objects isme iterator mai objects ki keys aa jati hai and this loop is also used
// to iterate on arrays
// let student={
//     name:"disha",
//     age:20,
//     gpa:8.45,
//     isPass:true
// };
// for(let it in student)
// {
//     console.log("key on which it is itearaing is"+it+" and value is:"+student[it]);
// }

// PRACTICE QUESTIONS
// for(let i=1;i<=100;i++)
// {
//     if(i%2===0)
//     {
//         console.log(i);
//     }
// }

// STIRNGS
// let name='disha';
// console.log(name.length);

// template litreal
// let obj={
//     item:"pen",
//     price:10,
// };
// console.log(`the item is ${obj.item} and the price is ${obj.price} rupees`);
// using the back tics it is easy to write the statemetns unkike this one : console.log("key on which it is itearaing is"+it+" and value is:"+student[it]);

// stirng methods
let str="disha";
let name1="pooja";
// console.log(str.length);
// let newStr=str.toUpperCase();
// this method does not change the original string it generates a new  output like here it is newStr and the str remains the same
// the original string does not change because in js the strings are immutable
// console.log(str);
// console.log(newStr);
let newStr1=str.trim();
// the trim() removes all the white spaces form the string
// console.log(newStr1.length);
console.log(newStr1.slice(1,2));
console.log(newStr1.charAt(3));
console.log(str.concat(name1));
console.log(str.replace("d","y"));





