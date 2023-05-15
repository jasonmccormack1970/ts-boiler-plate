import { Machine, Operator, Work } from "./lib/classes";
import { setScale} from "./lib/functions";

// Classes Work Example
const mach1 = new Machine(6500, '3D Printer', 'UK-Winnersh', 1, 3)
const opr1 = new Operator(7899, 'Jim Smith', 'UK-Winnersh', 23)
const workCentre1 = new Work(mach1 , opr1)
console.clear();
console.table(workCentre1)
console.log(opr1.name, workCentre1.isOK())


const days: Function = setScale({ scale: 365 })
console.log("Effort", days(2))
