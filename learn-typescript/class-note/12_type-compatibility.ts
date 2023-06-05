//인터페이스
interface Developer12 {
    name: string;
    skill: string;
}

interface Person12 {
    name: string;
}

let developer12: Developer12;
let person12: Person12
// developer12 = person12 // 호환 불가
person12 = developer12 // 호환 가능

class Person12_2 {
    name: string;
    skill: string;
}
developer12 = new Person12_2();

//함수
let add12 = function (a: number): number {
    return a;
    //..
}

let sum12 = function (a: number, b: number): number {
    //..
    return a + b;
}

sum12 = add12;
sum12(1, 2);
let result: number = sum12(1, 2); //result 1

//제너릭
interface Empty<T> {

}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2; //ok
empty2 = empty1; //ok

interface NotEmpty<T> {
    data: T;
}

let notemtpy1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
//notemtpy1 = notempty2; // error