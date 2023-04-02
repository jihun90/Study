import * as fs from "fs";

let inputPath: string = process.argv.slice(2)[0];
//let inputPath: string = "/dev/stdin";

let input: string[] = fs.readFileSync(inputPath).toString().split("\n");

let marsFunc: { [key: string]: (elemnt: number) => number };
marsFunc = {
  "@": (element: number): number => {
    return element * 3;
  },
  "%": (element: number): number => {
    return element + 5;
  },
  "#": (element: number): number => {
    return element - 7;
  }
};

for (const elemnet of input.slice(1)) {
  if (elemnet === "") continue; // 빈 문자열 처리

  let arr: string[] = elemnet.split(" ");
  let N: number = Number(arr.splice(0, 1));

  arr.map((sign: string) => {
    N = marsFunc[sign](N);
  });

  console.log(N.toFixed(2));
}
