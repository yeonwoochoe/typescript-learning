interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: "연우",
  age: 31,
};

type Keys = keyof IPerson;

const keys: Keys = "name";

//
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProp(person, "age");

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(person, "name", "kim");
// function setProp<IPerson, "name">(obj: IPerson, key: "name", value: string): void
setProp(person, "age", 1);
// function setProp<IPerson, "age">(obj: IPerson, key: "age", value: number): void
