"use strict";
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny(12234);
any1.toString();
const leakingAny = (obj5) => {
    const a5 = obj5.num;
    // number로 제한을 해줘야 나중에 맞지 않는 함수인지 check 할수 있음 (number 명시 안하면 any로 전파되서 적절한 함수의 사용이 되었는지 check를 못함)
    const b5 = a5 + 1;
    return b5;
};
const c = leakingAny({ num: 0 });
