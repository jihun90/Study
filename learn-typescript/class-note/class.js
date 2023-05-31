// ES2015 (ES6)

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// let kim = new Person('kim',1000); 

class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log("생성 되었습니다.");
        this.name = name;
        this.age = age;
    }
}

let kim = new Person('kim',1000); 
console.log(kim);

//prototype
let user = {name : 'kim', age : 100};
let admin = {};
admin.__proto__ = user;
admin.role = 'admin'
console.log(admin.name);
console.log(admin.age);
console.log(admin.role);

let obj = { a:10 };
Object.keys(obj);
console.log(obj.__proto__);

let arr = [];
console.log(arr.__proto__);
