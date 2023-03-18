let inputPath: string = '';
if (process.argv[2] = 'True') inputPath = process.argv[3];
else inputPath = '/dev/stdin';

let input : string[] = require('fs').readFileSync(inputPath).toString().split('\n');

let numbers = input[0].split(' ');
console.log(Number(numbers[0]) * Number(numbers[1]));
