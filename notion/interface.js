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
const k = {
    name: "연우",
    city: "안양",
    age: 30,
};
const helloPerson = function (n, a) {
    console.log(`안녕하세요 ${n}입니다. 나이는 ${a}`);
};
// 매개 변수 이름이 인터페이스와 일치할 필요가 없습니다.
// 또한 타입 추론을 통해 매개 변수를 순서에 맞게 암시적 타입으로 제공할 수 있습니다.
helloPerson("연우", 30);
const helloPersons = function (name, age) {
    console.log(`안녕하세요! ${name} 입니다.`);
}; // error 할당 불가 하다고 하는데 이해가 안감 ㅠ
helloPersons("연우", 30);
