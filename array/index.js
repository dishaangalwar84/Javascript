// ARRAYS
// generally jab same type ke data to store karna hota hai toh array ka use karte hai
let marks=[23,45,67,89];
// console.log(marks);
// console.log(marks.length);
// console.log(typeof marks);
// length is a property (property wo hoti hai jo koi value deti hai aur method hota hai jo koi kaam karta hai)
// array in js is a type of a object only
// array ko object islye bolte hai q ki index ko key samaj lo aur uss index ki value as value.
// array is mutable
// for(let i in marks)
// {
//     console.log(marks[i]);
// }
// iterating with the for-in loop is not considered as a good practice because it iterates on the indices and not on 
// the elements
// for(let i of marks)
// {
//     console.log(i);
// }
// to iterate over an array generally using the for-of loop is considered as a good practice because it iterates on the
// elements and not on the indices

// PRACTICE QUESTIONS
// let marks=[85,97,44,37,76,60];
// let n=marks.length;
// let sum=0;
// for(let mark of marks)
// {
//      sum+=mark;
// }
// console.log("average is:",sum/n);

let prices=[23,56,34,78,67];
// let n=prices.length;
// let sub;
// for(let price of prices)
// {
//     sub=price*0.10;
//     price=price-sub;
//     console.log(price);
// }

// ARRAY METHODS
// push()-> adds the element to the end
// pop()-> removes the element form the end and returns it
// toString()-> converts the array to string
// conCat()-> joins multiple arrays and returns
// unshift()-> adds to start
// shift()-> delete form start and return
// slice()-> returns a piece of the array
// splice()-> change original array (add,remove,replace)


// prices.push(45);
// prices.pop();
// console.log(prices);
// prices.pop(56);
// op: [ 23, 56, 34, 78 ] it is not poped 56 instead removed the last element only (imp: pop only removes the last element)
// console.log(prices);
// prices.toString();
// console.log(prices);
// console.log(prices.slice(1,3));
// here the 3rd index won't be included i.e. it will only give form 1 to 2
console.log(marks.splice(2,1,101));
console.log(marks);
