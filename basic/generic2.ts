function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>("연우", 30);
helloBasic(36, 39);
