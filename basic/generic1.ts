function helloString(meesage: string): string {
  return meesage;
}

function helloNumber(meesage: number): number {
  return meesage;
}
//   더 많은 반복된 함수들

function hello(meesage: any): any {
  return meesage;
}

console.log(hello("연우").length);
console.log(hello(30).length);

function helloGeneric<T>(meesage: T): T {
  return meesage;
}

console.log(helloGeneric("연우").length);
console.log(helloGeneric(30));
console.log(helloGeneric(true));
