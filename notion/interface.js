"use strict";
function hello1(person) {
    console.log(`안녕하세요! ${person.name} 입니다`);
}
const p1 = {
    name: "연우",
    age: 30,
};
hello1(p1);
function hello2(person) {
    console.log(`안녕하세요 ${person.name} 입니다`);
}
hello2({ name: "연우", age: 31 });
hello2({ name: "연우" });
function hello3(person) {
    console.log(`안녕하세요 ${person.name}입니다`);
}
const p31 = {
    name: "연우",
    age: 39,
};
const p30 = {
    name: "안나",
    systers: ["SUNG", "CHAN"],
};
const p33 = {
    name: "복순이",
    father: p31,
    mother: p30,
};
const p41 = {
    name: "미크",
    age: 39,
    hello: function () {
        console.log(`안녕하세요" ${this.name}입니다`);
    },
};
const p42 = {
    name: "미크",
    age: 39,
    hello() {
        console.log(`안녕하세요" ${this.name}입니다`);
    },
};
p41.hello();
p42.hello();
class PersonOrigin {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요 ${this.name}  입니다`);
    }
}
const person5 = new PersonOrigin("연우");
person5.hello();
let item = ["a", "b", "c"]; // Indexable type
console.log(item[0]); // 'a' is string.
console.log(item[1]); // 'b' is string.
console.log(item["0"]); // Error - TS7015: Element implicitly has an 'any' type because index expression is not of type 'number'.
