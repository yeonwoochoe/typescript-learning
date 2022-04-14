// class People {
//   name: string = "연우";
//   age: number;
//   constructor(age: number) {
//     this.age = age;
//   }
// }
// const pp1 = new People(30);

// console.log(pp1.age);

class Person2 {
  name: string = "연우";
  age2: number;

  constructor(age2?: number) {
    if (age2 === undefined) {
      this.age2 = 1;
    } else {
      this.age2 = age2;
    }
  }
}
const p2: Person2 = new Person2(); // OK
const p2_1: Person2 = new Person2(24); // OK

console.log(p2);
console.log(p2_1);

class Person4 {
  name: string = "asyn_test";
  // age: number; // error
  age!: number;

  async init() {
    this.age = 2;
  }
}

//접근 제어자
