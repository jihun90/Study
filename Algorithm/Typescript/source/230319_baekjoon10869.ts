//let inputPath = process.argv.slice(2)[0];
let inputPath : string = '/dev/stdin';

let input : string[] = require('fs').readFileSync(inputPath).toString().split('\n');

let numbers : string[] = input[0].split(' ');
console.log(Number(numbers[0]) + Number(numbers[1]));
console.log(Number(numbers[0]) - Number(numbers[1]));
console.log(Number(numbers[0]) * Number(numbers[1]));
console.log(Math.floor(Number(numbers[0]) / Number(numbers[1])));
console.log(Number(numbers[0]) % Number(numbers[1]));