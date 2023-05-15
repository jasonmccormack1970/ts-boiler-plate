"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Work = exports.Operator = exports.Machine = exports.Resource = void 0;
class Resource {
    code;
    name;
    location;
    status;
    constructor(code, name, location) {
        this.code = code;
        this.name = name;
        this.location = location;
        this.status = 'Active';
    }
    get whoAmI() {
        return `Your code is ${this.code}, youe name is ${this.name}, and your location is ${this.location}`;
    }
}
exports.Resource = Resource;
class Machine extends Resource {
    numberOfOperators;
    operatorsLevel;
    constructor(code, name, location, numberOfOperators, operatorsLevel) {
        super(code, name, location);
        this.numberOfOperators = numberOfOperators;
        this.operatorsLevel = operatorsLevel;
    }
}
exports.Machine = Machine;
class Operator extends Resource {
    age;
    constructor(code, name, location, age) {
        super(code, name, location);
        this.age = age;
    }
    ageVerification() {
        if (this.age < 18) {
            return 1;
        }
        if (this.age < 21) {
            return 2;
        }
        return 3;
    }
}
exports.Operator = Operator;
class Work {
    machine;
    operator;
    constructor(machine, operator) {
        this.machine = machine;
        this.operator = operator;
    }
    isOK() {
        if (this.operator.ageVerification() >= this.machine.operatorsLevel) {
            return "You are Ok to do this";
        }
        else {
            return "You are not permited to use this machine";
        }
    }
}
exports.Work = Work;
