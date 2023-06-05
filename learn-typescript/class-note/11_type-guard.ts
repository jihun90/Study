interface Developer {
    name: string;
    skill: string;
}

interface Persen {
    name: string;
    age: number;
}

function introduce(): Developer | Persen {
    return { name: 'kim', age: 34, skill: 'Delphi' }
}
let man = introduce();
// console.log(man.skill);
// 너무 읽기 힘들어 쓰지마!!
if ((man as Developer).skill) {
    let skill = (man as Developer).skill;
    console.log(skill);
} else if ((man as Person).age) {
    let age = (man as Persen).age;
    console.log(age);
};

//타입 가드 정의
function isDeveloper(target: Developer | Persen): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(man)) {
    console.log(man.skill);
} else {
    console.log(man.age);
}