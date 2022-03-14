//원시타입 : 숫자, 문자, 불리언
//객체,배열
//함수

let age: number;
//타입을 명칭할때는 반드시 소문자로 형태로 명시해야 한다.
// 앞 첫글자를 대문자로 명시할 시 자바스크립트의 객체로 인식하기 때문.
//자바스크립트는 동적언어! 런타임시점에서 타입이 설정되어짐 /오류발견
age = 30;

let userName: string;

userName = "yeonwoo"; // 유형 추론

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies = ["cooking", "sports"];

type Person = {
  name: string;
  age: number;
};

//let person: any; //어떤 타입이던간에 알려주지 않을 거라는 의미 , 대체타입, 보통 사용하지 않음

let person: Person;
//타입 별칭 (Type Aliases)

person = {
  name: "yenowoo",
  age: 30,
};

let people: Person[]; // 타입 별칭을 사용하면 이렇게 변형하여 사용도 가능하다.

people = [
  { name: "yenowoo", age: 30 },
  { name: "suho", age: 30 },
];

// person = {
//   isEmployee:true
// } 잘못된 타입 설정

//타입 주석(type annotation) : 변수 n뒤의 콜론(:)과 타입 이름
//타입 추론(type inference) : 2행처럼 타입 부분을 생략할 수도 있다. 타입스크립트는 변수와 타입부분이 생략되면 대입 연산자의 오른쪽 값을 분석해 왼쪽 변수의 타입을 결정한다.

//유니온타입 :자바스크립트의 OR 연산자(||)와 같이 'A' 이거나 'B'이다라는 의미의 타입
let course: string | number = "React";
course = 12345; //오류발생

// function showItem(arr: number[]) {
//   arr.forEach((item) => {
//     console.log(item);
//   });
// }

// console.log(showItem([1, 2, 3]));

//Function & Type

function addShow(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  color: "white",
  wheels: 4,
  door: 5,
  stop() {
    console.log("stop");
  },
  start() {
    console.log("go..");
  },
};

//제네릭(Generics)

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray; // 기존 배열이 바뀌지 않는다는점 , 새로운 배열탄생
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1,2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

updatedArray[0].split(""); //문자열을 쪼개서 배열로 만드는 메서드.
