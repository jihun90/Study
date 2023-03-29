import * as fs from 'fs' 

//let inputPath : string = process.argv.slice(2)[0]
let inputPath : string = '/dev/stdin' 

let toNumber = (arr : string []) : number[] => {
    let res:Array<number> = new Array<number>();
    arr.forEach((text) => {res.push(Number(text)) } )
    return res;
}

let N : number;
let M : number;
[N, M] =  toNumber(fs.readFileSync(inputPath).toString().split(' '))

console.log(`${N*M -1}`)