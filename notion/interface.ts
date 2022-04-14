interface PersonInterface {
  name: string;
  age: number;
}

function hello1(person: PersonInterface): void {
  console.log(`안녕하세요! ${person.name} 입니다`);
}

const p1: PersonInterface = {
  name: "연우",
  age: 30,
};

hello1(p1);

//Optional property 01
interface Person1 {
  name: string;
  age?: number;
}

function hello2(person: Person1): void {
  console.log(`안녕하세요 ${person.name} 입니다`);
}

hello2({ name: "연우", age: 31 });
hello2({ name: "연우" });

//Optional property 02

interface Person2 {
  name: string;
  age?: number;
  [index: string]: any;
}

function hello3(person: Person2): void {
  console.log(`안녕하세요 ${person.name}입니다`);
}

const p31: Person2 = {
  name: "연우",
  age: 39,
};

const p30: Person2 = {
  name: "안나",
  systers: ["SUNG", "CHAN"],
};

const p33: Person2 = {
  name: "복순이",
  father: p31,
  mother: p30,
};

//Interface를 통한 함수 type 지정과 할당

interface Person3 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person3 = {
  name: "미크",
  age: 39,
  hello: function (): void {
    console.log(`안녕하세요" ${this.name}입니다`);
  },
};

const p42: Person3 = {
  name: "미크",
  age: 39,
  hello(): void {
    console.log(`안녕하세요" ${this.name}입니다`);
  },
};

p41.hello();
p42.hello();

// const p43 :Person3 ={
//   name:"미크",
//   age:39,
//   hello: ():void =>{
//     console.log(`안녕하세요" ${this.name}입니다`)
//   }
// }

//Interface를 바탕으로 class 만들기

interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class PersonOrigin implements IPerson1 {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }
  hello(): void {
    console.log(`안녕하세요 ${this.name}  입니다`);
  }
}

const person5: IPerson1 = new PersonOrigin("연우");
person5.hello();

interface IItem {
  [itemIndex: number]: string; // Index signature
}
let item: IItem = ["a", "b", "c"]; // Indexable type
console.log(item[0]); // 'a' is string.
console.log(item[1]); // 'b' is string.
console.log(item["0"]); // Error - TS7015: Element implicitly has an 'any' type because index expression is not of type 'number'.

//Interface : extends inheritance (상속)

interface IPerson2 {
  name: string;
  age: number;
}

interface IKoren extends IPerson2 {
  city: string;
}

const k: IKoren = {
  name: "연우",
  city: "안양",
  age: 30,
};

//interface로 function 표현하기

interface HelloPerson {
  (name: string, age?: number): void;
}
const helloPerson: HelloPerson = function (n, a) {
  console.log(`안녕하세요 ${n}입니다. 나이는 ${a}`);
};

// 매개 변수 이름이 인터페이스와 일치할 필요가 없습니다.
// 또한 타입 추론을 통해 매개 변수를 순서에 맞게 암시적 타입으로 제공할 수 있습니다.
helloPerson("연우", 30);

const helloPersons: HelloPerson = function (name: string, age: number) {
  console.log(`안녕하세요! ${name} ${age} 입니다.`);
}; // error 할당 불가 하다고 하는데 이해가 안감 ㅠ
helloPersons("연우", 30);

//reade only

interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

// 한번 넣고 바뀌지 않는 값이라면, readonly를 붙여주는 버릇이 필요함
const p81: Person8 = {
  name: "Mark",
  gender: "male",
};

p81.gender = "female"; //읽기전용이기 떄문에 타입에러가나옴
