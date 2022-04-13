"use strict";
let x;
//순서와 타입이 맞아야함
x = ["hello", 30];
// x = [10,"연우"] 잘못된 방식
x[0] = "world";
const person3 = ["lyn", 34];
// const [first, second,third] = person3;
//최초 튜플 length가 2개이기떄문에 비구조화할당에서 3개를 부여할수없다.
