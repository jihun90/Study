import * as fs from 'fs' 

//let inputPath : string = process.argv.slice(2)[0]
let  inputPath : string = '/dev/stdin'

let input : string[] = fs.readFileSync(inputPath).toString().split('\n')

let [A, I] = input[0].split(' ').map(Number)

console.log(`${A* (I-1) +1}`)