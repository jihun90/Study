var unionTypeTest: string | number | boolean;
function logMessage(value: string | number): void { //union type
    if (typeof value === 'number') {
        console.log(value.toLocaleString);
    } else {
        console.log(value.toString());
    }
    throw new TypeError("value mest be string or number");
}
logMessage('Hello');
logMessage(100);

interface Developer5 {
    name: string;
    skill: string;
}

interface Person5 {
    name: string;
    age: number;
}

function askSomeone(someone: Developer5 | Person5) { //union
    someone.name;
    // someone.skill? someone.age? No!
}
askSomeone({ name: 'kim', skill: 'delphi' });
askSomeone({ name: 'kim', age: 100 });

function askSomeone2(someone: Developer5 & Person5) { //intersection
    someone.name = 'kim';
    someone.age = 100;
    someone.skill = 'Delphi';
}

askSomeone2({ name: 'kim', age: 100, skill: 'delphi' })