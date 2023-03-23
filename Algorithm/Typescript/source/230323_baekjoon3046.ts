//let inputPath : string = process.argv.slice(2)[0]
let inputPath : string = '/dev/stdin' 

let input : string[] = require('fs').readFileSync(inputPath).toString().split(' ')

let R1 : number = Number(input[0])
let S : number = Number(input[1])

let R2 : number = (S * 2) - R1

console.log(R2)