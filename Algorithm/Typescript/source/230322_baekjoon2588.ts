let inputPath : string = process.argv.slice(2)[0]
//let inputPath : string = '/dev/stdin' 

let numbers : string[] = require('fs').readFileSync(inputPath).toString().split('\n')

let number : number = Number(numbers[0])
let num100 : number = Number(numbers[1][0])
let num10 : number = Number(numbers[1][1])
let num1 : number = Number(numbers[1][2])

let ans1 : number = number * num1
let ans10 : number = number * num10
let ans100 : number = number * num100

let ans = ans1 + ans10 * 10 + ans100 * 100

console.log(ans1)
console.log(ans10)
console.log(ans100)
console.log(ans)