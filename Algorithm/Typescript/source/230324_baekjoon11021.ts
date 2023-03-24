import * as fs from 'fs'
//let inputPath : string = '/dev/stdin' 
let inputPath : string = process.argv.slice(2)[0].toString()

let inputs : string[] = fs.readFileSync(inputPath).toString().split('\n')

let func : (index : number, a : number, b : number) => void
func = function(index, a, b) { console.log(`Case #${index}: ${a+b}`)}

//for (let index in inputs) {
for(let index : number = 1; index<=Number(inputs[0]); index++) {
    let temp : string[] = inputs[index].split(' ')
    func(index, Number(temp[0]), Number(temp[1]))
}