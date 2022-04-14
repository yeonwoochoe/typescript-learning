class Parent {
  constructor(protected _name: string, private _age: number) {}
  public print(): void {
    console.log(`이름은 ${this._name}이고 , 나이는 ${this._age} 입니다`);
  }
}

// const pr = new Parent("연우", 30);
// //pr._name//  접근불가능
// pr.print();

//상속

class Child extends Parent {
  public _name = "도랑이";
  public gender = "male";
  constructor(age: number) {
    super("도랑이", age);
  }
}
const cc = new Child(5);
cc.print();
cc.gender; //접근가능
cc._name; //이렇게 하면 접근가능
