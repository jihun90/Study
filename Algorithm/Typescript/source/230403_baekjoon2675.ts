import * as fs from "fs";

//let inputPath: string = process.argv.splice(2)[0];
let inputPath: string = "/dev/stdin";
let input: string[] = fs.readFileSync(inputPath).toString().split("\n");

for (const element of input.splice(1)) {
  if (element === "") continue;

  let [num, str] = [
    Number(element.split(" ")[0]),
    element.split(" ")[1].toString(),
  ];

  let res : string = '';
  for(let i : number = 0; i<str.length; i++)
  {
      res += str.charAt(i).repeat(num);
  }
  console.log(res)
}
