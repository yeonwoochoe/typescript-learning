"use strict";
function helloArray(message) {
    return message[0];
}
console.log(helloArray(["Hello", "world"])); // Hello
console.log(helloArray(["Hello", 5])); // Hello
function helloTuple(message) {
    return message[0];
}
console.log(helloTuple(["Hello", "world"])); // Hello
console.log(helloTuple(["Hello0334", 5]).length); // 9
