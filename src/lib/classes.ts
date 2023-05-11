export class Resource {
    code: number;
    name: string;
    location: string;
    status: string;
    constructor(code,  name, location){
        this.code = code; 
        this.name = name; 
        this.location = location; 
        this.status = 'Active'
    }
    get whoAmI(){
       return `Your code is ${this.code}, youe name is ${this.name}, and your location is ${this.location}`; 
     }
}

export class Machine extends Resource{
    numberOfOperators: number;
    operatorsLevel: string;
    constructor(code,  name, location, numberOfOperators, operatorsLevel){
    super(code,  name, location)
    this.numberOfOperators = numberOfOperators; 
    this.operatorsLevel = operatorsLevel
    }
}

export class Operator extends Resource{
    age: number;
    constructor(code,  name, location, age){
         super (code,  name, location)
         this.age = age; 
    }

    ageVerification (){
        if (this.age < 18){
            return 1
        }
        if (this.age < 21){
            return 2
        }
        return 3
      }
}

export class Work {
    machine: any;
    operator: any;
    constructor (machine, operator){
        this.machine = machine; 
        this.operator = operator; 
    }

    isOK (){
        if (this.operator.ageVerification() >= this.machine.operatorsLevel){
            return "You are Ok to do this"; 
        }else {
            return "You are not permited to use this machine"; 
        }
    }
}