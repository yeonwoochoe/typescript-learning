"use strict";
// class People {
//   name: string = "연우";
//   age: number;
//   constructor(age: number) {
//     this.age = age;
//   }
// }
// const pp1 = new People(30);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// console.log(pp1.age);
class Person2 {
    constructor(age2) {
        this.name = "연우";
        if (age2 === undefined) {
            this.age2 = 1;
        }
        else {
            this.age2 = age2;
        }
    }
}
const p2 = new Person2(); // OK
const p2_1 = new Person2(24); // OK
console.log(p2);
console.log(p2_1);
class Person4 {
    constructor() {
        this.name = "asyn_test";
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.age = 2;
        });
    }
}
//접근 제어자
