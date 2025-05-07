"use strict";
const x = 5;
console.log(x);
function greet(firstName) {
    console.log("Hello " + firstName);
}
function runAfter1S(fn) {
    setTimeout(fn, 1000);
}
const user = {
    firstName: "Varinder",
    lastName: "Dhillon",
    age: 23,
};
greet(user.firstName);
runAfter1S(greet);
