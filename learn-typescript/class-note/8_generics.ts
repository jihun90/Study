// function logText(text) { // any를 사용중
//     console.log(text);
//     return text;
// }

// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이

//제너릭 기본형
function logText<T>(text: T): T {
    console.log(text);
    return text;
}
logText<string>('하이');


//아래 함수를 나누면  중복되는것도 많고 코드도 비대해지고.. 구리다..
function logText2(text: string) {
    console.log(text);
    //text.split('').reverse().join();
    return text;
}

function logNumber2(num: number) {
    console.log(num);
    return num;
}


//union과 intersection을 사용한다면? 그래도 타입이 명확하지 않음
function logText3(text: string | number) {
    console.log(text);
    return text;
}
logText(10); // 숫자 10
logText('하이'); // 문자열 하이


//제너릭의 장점, 타입이 명확
function logText4<T>(text: T): T {
    console.log(text);
    return text;
}

logText<number>(10); // 숫자 10
const str8: string = logText<string>('하이');
str.split('');
const login: boolean = logText<boolean>(true);


//interfalce에 제너릭을 선언
interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj1: Dropdown<string> = { value: "hi", selected: true }
const obj2: Dropdown<number> = { value: 123, selected: false }

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
}
logTextLength<string>(['hi', 'abc']);

// 제너릭 타입 제한 2 = 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength2<string>('a');
logTextLength2({ length: 3 });

//제너릭의 타입제한3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoopingIteemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
getShoopingIteemOption('name');

