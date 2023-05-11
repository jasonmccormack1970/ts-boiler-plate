import { Machine, Operator, Work } from "./lib/classes"; 

const mach1 = new Machine(6500, '3D Printer', 'UK-Winnersh', 1, 3)
const opr1 = new Operator(7899, 'Jim Smith', 'UK-Winnersh', 16)
const workCentre1 = new Work(mach1 , opr1)

console.clear(); 
console.table(workCentre1)
console.log(opr1.name, workCentre1.isOK())







// const opr1 = new Operator(7899, 'Jim Smith', 'UK-Winnersh', 16)
// console.table(mach1);
// console.log(mach1.whoAmI);
// console.log(mach1.ISO);
// console.table(opr1); 
// console.log(opr1.whoAmI);



// console.table(workCentre1); 
// console.log(workCentre1.isOK())