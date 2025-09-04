"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// step:1. Decorators ka use hum log kisi bhi class ya class ke andar property ya method ka naam get karne ke liye karte hai.
function decorators(constructor) {
    console.log("Class Name:", constructor.name);
}
// step: 2. How to use decorators.
// class ka naam get karne ke liye class ke upar likhe class ke nadar ke get karne ke liye class ke andar likhe.
let CustomClass = class CustomClass {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};
CustomClass = __decorate([
    decorators
], CustomClass);
const obj = new CustomClass(10, 20);
console.log("Object:", obj);
