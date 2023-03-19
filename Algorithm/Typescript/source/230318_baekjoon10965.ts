let inputPath: string = '';
inputPath = process.argv[2];
//inputPath = '/dev/stdin';

let input : string[] = require('fs').readFileSync(inputPath).toString().split('\n');

let numbers : string[] = input[0].split(' ');
console.log(Number(numbers[0]) * Number(numbers[1]));
