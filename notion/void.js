"use strict";
function returnVoid(message) {
    console.log(message);
    return;
}
// const r = returnVoid("같은의미")
returnVoid("안녕");
// sub1 sup1 .
let sub1 = 1;
let sup1 = sub1;
sub1 = sup1; // error! Type 'number' is not assignable to type '1'.
// sub2 sup2 .
let sub2 = [1];
let sup2 = sub2;
sub2 = sup2; // error! Type '{}' is missing the following properties from type 'number[]':
length, pop, push, concat, and;
16;
more.
;
// sub3 sup3 .
let sub3 = [1, 2];
let sup3 = sub3;
sub3 = sup3; // error! Type 'number[]' is not assignable to type '[number, number]'. Target
requires;
2;
element(s);
but;
source;
may;
have;
fewer.
;
