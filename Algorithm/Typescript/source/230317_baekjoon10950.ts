let inputPath: string;
if (process.env.DEBUG = 'True') inputPath = process.argv[2];
else inputPath = '/dev/stdin';

let input = require('fs').readFileSync(inputPath).toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ');
    
    console.log(Number(numbers[0]) + Number(numbers[1]));
}