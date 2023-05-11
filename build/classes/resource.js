"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
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
