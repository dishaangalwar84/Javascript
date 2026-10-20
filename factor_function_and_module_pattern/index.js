// DESTRUCTION/UNPACKING
function createUser(name) {
    const discordName = "@" + name;

    return {
        name,
        discordName
    };
}
const user1 = createUser("disha");
const user4 = createUser("apeksha");
console.log(user1);
const obj = {
    a: 1,
    b: 2
};
const {a,b}=obj;
console.log(obj);
console.log(obj.a);
// Go inside obj, find the property called a, and create a variable called a containing its value and
// "Go inside obj, find the property called b, and create a variable called b containing its value
// it is basically converting object properties into variables with the same values as that of the properties

// PRIVATE VARIABLE
function createUser(name) {
    const discordName = "@" + name;
// here since reputation is defined inside createUser() hence it is only  accessible in this function but it can be accessible if we 
// returned it.
    let reputation = 0;

    const getReputation = () => reputation;

    const giveReputation = () => {
       return reputation++;
    };

    return {
        name,
        discordName,
        getReputation,
        giveReputation,
        reputation
    };
}
const user3=createUser("disha");;
console.log(user1.name);
console.log(user3.getReputation());
console.log(user3.giveReputation());
console.log(user3.giveReputation());
console.log(user3.reputation);
user1.reputation=100;
console.log(user3.reputation);
const user2=createUser("pooja");
console.log(user2.reputation);
// // since we have not returned the reputation then it is treated as a private varible that cannot be accessed outside the function
// // you can only access it with the functions because we have returned that (i.e. they are public) even if i return then also it wil be
// // like a property for the object not the original variable we can only access the original variable inside the createUser() function (like we are using in the giveReputation()).
// here also we are alterating the original variable only but when an object is created it is treated as the property for that object and then altered
// hence the value of user1.reputation was not same as the user2.reputation because at that time they had there own reputation variable 
// but in the calculator example only one object is created everytime that is the calculator hence the lastResult variable is shared to all the 
// functions.

// COMPOSITION
function createPlayer(name, level) {
    const { getReputation, giveReputation } = createUser(name);

    const getLevel = () => level;

    const increaseLevel = () => {
       return level++;
    };

    return {
        name,
        getReputation,
        giveReputation,
        getLevel,
        increaseLevel
    };
}
//  here getReputation and giveReputation are variables that hold references to functions.
// this is called as composition where we only access what we want to access we use it when there is no strong relation between 2 functions() (like createUser and cretePlayer)
// we only needed the reputation part not the entire part (i.e. each and every variable and function in that case we need to use inheritance)
const p1= createPlayer("maya");
console.log(p1.getReputation());

// OBJECT ASSIGN
const user = {
    name: "Disha",
    age: 21
};

const extra = {
    level: 5
};
const player=Object.assign({},user,extra);
console.log(player);
// takes properties form both the objects (user and extra) and puts it into new object (player)

// IIFE
(function() {
    const secret = "12345";
})();
console.log(secret); 
// these functions create there own space and the variables cannot be accessed outside;
// it is created and immediately called we don't need to call it explicitly.

// Now combine IIFE + closure
const calculator = (() => {
    let lastResult;

    const add = (a, b) => {
        lastResult = a + b;
        return lastResult;
    };

    const subtract = (a, b) => {
        lastResult = a - b;
        return lastResult;
    };

    const multiply = (a, b) => {
        lastResult = a * b;
        return lastResult;
    };

    const divide = (a, b) => {
        lastResult = a / b;
        return lastResult;
    };

    const getLastResult = () => lastResult=0;

    return {
        add,
        subtract,
        multiply,
        divide,
        getLastResult
    };
})();
console.log(calculator.add(3,2));
console.log(calculator.subtract(3,2));
console.log(calculator.multiply(3,2));
console.log(calculator.divide(3,2));
console.log(calculator.getLastResult());
// here lastResult is the proeprty of all object calculator 
