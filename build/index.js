"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./lib/classes");
// Classes Work Example 
const mach1 = new classes_1.Machine(6500, '3D Printer', 'UK-Winnersh', 1, 3);
const opr1 = new classes_1.Operator(7899, 'Jim Smith', 'UK-Winnersh', 23);
const workCentre1 = new classes_1.Work(mach1, opr1);
console.clear();
console.table(workCentre1);
console.log(opr1.name, workCentre1.isOK());
// const nums= []
// // create a function to generate a Fibonacci sequence up to 100.
// function fibonacci(n) {  
//       if (n <= 1) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }  
// const fibonacciSequence = nums.map(fibonacci(100))
// console.log(fibonacciSequence)
