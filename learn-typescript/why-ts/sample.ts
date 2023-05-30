function sumUsingTS(a: number, b: number): number {
  return a + b;
}

var resultUsingTS = sumUsingTS(10, 20);
resultUsingTS.toLocaleString(); //자동완성 굿 , 타입 추론 굿!
