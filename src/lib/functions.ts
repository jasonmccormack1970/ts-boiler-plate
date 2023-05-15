// ==========================================================
//  Higher Order Functions
//  A function that takes another function as an argument
//  A function that can return a function
// ==========================================================

const nums = [1,4,77,988,99,8,666,55]
const names = ['Jo','John', 'Jane', 'Mary', 'Mark', 'Paul', 'Sarah', 'Jacob', 'Larry', 'Jill', 'Bob']

const over1 = nums.filter(
        function value(val){
            return val > 10
        }
)

// refactor the above example to use an arrow function
const over2 = nums.filter(val => val > 550)

const firstNames1 = names
        .filter(name => name.startsWith('J'))
        .filter(name => name.length <= 4)
        .map(name => name.toUpperCase())

// Quokka.js debug
// firstNames1

const firstNames2 = names
        .filter(name => name.startsWith('J'))
        .filter(name => name.length <= 4)
        .map(name => name.toUpperCase())

// Quokka.js debug
// firstNames2


// funtion that retunrs a function
let result: number

function months(resources: number){
    return resources *  12
}
function weeks(resources: number ){
    return resources * 52
}
function days(resources: number ){
    return resources * 365
}

result = months(1)
result = weeks(1)
result = days(1)

// Quokka.js debug
// result

// Function factory
function setScale({ scale }: { scale: number }): Function {
    return function(resources: number){
        if(resources <= 0 || scale < 0 || !scale || !resources){
             throw new Error('Invalid')
         }
        return resources * scale
    }
}

let effort: number

let week: Function  = setScale({ scale: 11 })
effort = week(2)

let month: Function = setScale({ scale: 12 })
effort = month(10)

let day: Function = setScale({ scale: 365 })
effort = day(1)

// Quokka.js debug
effort
