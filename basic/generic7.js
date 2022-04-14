"use strict";
const person = {
    name: "연우",
    age: 31,
};
const keys = "name";
//
function getProp(obj, key) {
    return obj[key];
}
getProp(person, "age");
function setProps(obj, key, value) {
    obj[key] = value;
}
console.log(setProps(person, "name", "안나"));
