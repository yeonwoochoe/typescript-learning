"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
new Person("연우", 30);
//constructor Person<string>(name: string): Person<string>
// new Person<string>("희윤");
new Person("연우", 30);
