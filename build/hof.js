// ==========================================================
//  Higher Order Functions 
//  A function that takes another function as an argument 
//  A function that can return a function 
// ==========================================================
const nums = [1, 4, 77, 988, 99, 8, 666, 55];
const names = ['Jo', 'John', 'Jane', 'Mary', 'Mark', 'Paul', 'Sarah', 'Jacob', 'Larry', 'Jill', 'Bob'];
const over1 = nums.filter(function value(val) {
    return val > 10;
});
// refactor the above example 
const over2 = nums.filter(val => val > 550);
// Example 1 
const firstNames1 = names
    .filter(name => name.startsWith('J'))
    .filter(name => name.length <= 4)
    .map(name => name.toUpperCase());
firstNames1;
// Example 2         
const firstNames2 = names
    .filter(name => name.startsWith('J'))
    .filter(name => name.length <= randomNumber())
    .map(name => name.toUpperCase());
firstNames2;
function randomNumber() {
    //   return Math.floor(Math.random() * 10) + 1
    return 7;
}
// funtion that retunrs a function
let result;
function months(resources) {
    return resources * 12;
}
function weeks(resources) {
    return resources * 52;
}
function days(resources) {
    return resources * 365;
}
result = months(1);
result = weeks(1);
result = days(1);
result;
// Function factory 
function setScale(scale) {
    return function (resources) {
        return resources * scale;
    };
}
let effort;
let week = setScale(12);
effort = week(2);
let month = setScale(12);
effort = month(10);
let day = setScale(365);
effort = day(1);
effort;
