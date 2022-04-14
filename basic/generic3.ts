function helloArray<T>(message: T[]): T {
  return message[0];
}

console.log(helloArray(["Hello", "world"])); // Hello
console.log(helloArray(["Hello", 5])); // Hello

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

console.log(helloTuple(["Hello", "world"])); // Hello
console.log(helloTuple(["Hello0334", 5]).length); // 9
