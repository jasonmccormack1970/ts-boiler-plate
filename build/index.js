"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./lib/classes");
const functions_1 = require("./lib/functions");
// Classes Work Example
const mach1 = new classes_1.Machine(6500, '3D Printer', 'UK-Winnersh', 1, 3);
const opr1 = new classes_1.Operator(7899, 'Jim Smith', 'UK-Winnersh', 23);
const workCentre1 = new classes_1.Work(mach1, opr1);
console.clear();
console.table(workCentre1);
console.log(opr1.name, workCentre1.isOK());
const days = (0, functions_1.setScale)({ scale: 365 });
console.log("Effort", days(2));
