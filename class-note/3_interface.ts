interface User {
    age: number;
    name: string;
}

//변수에 활용 인터페이스
var jihun: User = {
    age: 34,
    name: '지훈'
}

//함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const user: User = {
    age: 100,
    name: 'kim'
}
getUser(user);

// 함수의 스펙에 인터페이스
interface SumFinction {
    (a: number, b: number): number;
}

let sum: SumFinction;
sum = function (a: number, b: number): number {
    return a + b;
}

//인덱싱
interface StringArray {
    [index: number]: string;
}

let strArr: StringArray = ['a', 'b', 'c'];
strArr[0] = 'A';

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

let strRex: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
};

Object.keys(strRex).forEach(function (value) {

})

//인터페이스 확장
interface Man {
    name: string;
    age: number;
}

interface Developer extends Man {
    language: string;
}

let kim: Developer = {
    name: 'kim',
    age: 100,
    language: 'Delphi' // :(
}
