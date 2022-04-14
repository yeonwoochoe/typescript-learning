class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}
new Person("연우", 30);
//constructor Person<string>(name: string): Person<string>
// new Person<string>("희윤");
new Person<string, number>("연우", 30);
