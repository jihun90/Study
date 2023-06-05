//타입 추론 기본
let a = 10;
let b = 'abc';

//자동으로 타입스크립트는 타입을 추론한다.
function getTest(test = 10) {
    var hi = 'hi';
    return test + hi;
}

//타입 추론 기본 2
interface Dropdown9<T> {
    value: T;
    title: string;
}

let shoppingItem: Dropdown9<string> = {
    value: 'abc',
    title: 'hello'
}

//타입 추론 기본3
interface Dropdown99<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown99<K> {
    description: string;
    tag: K;
}

let detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'test',
    value: 'stringValue',
    tag: 'stringTag',
}

// Best common type
let tempArr = [1, 2, true, 'a'];


