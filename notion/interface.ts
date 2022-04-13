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
