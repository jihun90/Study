let inputPath: string = '';
if (process.argv[2] = 'True') inputPath = process.argv[3];
else inputPath = '/dev/stdin';

let input : string[] = require('fs').readFileSync(inputPath).toString().split('\n');

for (let i = 1; i <= parseInt(input[0]); i++) {
    let numbers = input[i].split(' ');
    
    console.log(Number(numbers[0]) + Number(numbers[1]));
}