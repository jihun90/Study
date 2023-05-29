function sum1(a: number, b: number): number {
  return a + b;
}
sum1(10, 20);
//sum(10, 20, 30, 40) //JS는 추가 매개변수가 가능하지만.. TS는 이것을 막아줌!

//function Optional Parameter
function log(a: string, b?: string) {
  let log: string = a + (b ? b : "");
  console.log(log);
}

log("hello world");
log("hello ts", "test");
