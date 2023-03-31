import * as fs from 'fs' 

//let inputPath : string = process.argv.slice(2)[0]
let  inputPath : string = '/dev/stdin'

let input : string[] = fs.readFileSync(inputPath).toString().split('\n')

let [A, B, C] = input[0].split(' ').map(function(element){ return Number(element) })
let D : number = Number(input[1])

let date : Date = new Date()
date.setHours(A, B, C+D)
console.log(`${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`)