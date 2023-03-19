let inputPath  = process.argv.slice(2)[0];
//inputPath = '/dev/stdin';

let input : string[] = require('fs').readFileSync(inputPath).toString().split('\n');

let numbers : string[] = input[0].split(' ');
console.log(Number(numbers[0]) * Number(numbers[1]));
