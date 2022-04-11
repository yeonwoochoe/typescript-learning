declare const maybe: unknown;

if (typeof maybe === "number") {
  // const aBoolean: boolean =  maybe;
  const aNumber: number = maybe;
}

// const aNumber: number = maybe;
//unknown  형식은 number형식의 할당 할수없음.

if (maybe === true) {
  const aBoolean: boolean = maybe;
  // const aString: string =maybe;
}

if (typeof maybe === "string") {
  const aString: string = maybe;
  // const aBoolean: boolean =  maybe;
}
