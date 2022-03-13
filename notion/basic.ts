//원시타입 : 숫자, 문자, 불리언
//객체,배열
//함수

let age: number;
//타입을 명칭할때는 반드시 소문자로 형태로 명시해야 한다.
// 앞 첫글자를 대문자로 명시할 시 자바스크립트의 객체로 인식하기 때문.
//자바스크립트는 동적언어! 런타임시점에서 타입이 설정되어짐 /오류발견
age = 30;

let userName: string;

userName = "yeonwoo";

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies = ["cooking", "sports"];

//let person: any; //어떤 타입이던간에 알려주지 않을 거라는 의미 , 대체타입, 보통 사용하지 않음

let person: {
  name: string;
  age: number;
};

person = {
  name: "yenowoo",
  age: 30,
};

let people: {
  name: string;
  age: number;
}[];

people = [
  { name: "yenowoo", age: 30 },
  { name: "suho", age: 30 },
];

// person = {
//   isEmployee:true
// } 잘못된 타입 설정

// function showItem(arr: number[]) {
//   arr.forEach((item) => {
//     console.log(item);
//   });
// }

// console.log(showItem([1, 2, 3]));
