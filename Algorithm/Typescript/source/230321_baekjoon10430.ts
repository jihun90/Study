//let inputPath : string = process.argv.slice(2)[0]
let inputPath : string = '/dev/stdin' 
let numbers : string[] = require('fs').readFileSync(inputPath).toString().split(' ')

let a : number = Number(numbers[0])
let b : number = Number(numbers[1])
let c : number = Number(numbers[2])

console.log((a+b)%c)
console.log(((a%c)+(b%c))%c)
console.log((a*b)%c)
console.log(((a%c)*(b%c))%c)