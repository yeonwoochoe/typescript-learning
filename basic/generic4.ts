type HelloeFnGeneric1 = <T>(message: T) => T;

const helloFn: HelloeFnGeneric1 = <T>(message: T): T => {
  return message;
};

interface HelloeFnGeneric2 {
  <T>(message: T): T;
}

const helloFn2: HelloeFnGeneric2 = <T>(message: T): T => {
  return message;
};
