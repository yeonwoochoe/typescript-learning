"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name}이고 , 나이는 ${this._age} 입니다`);
    }
}
const pr = new Parent("연우", 30);
//pr._name//  접근불가능
pr.print();
