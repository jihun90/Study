// 타입 단언(type assertion)
let temp;
temp = 'str';
let temp2 = temp as string;

//Dom API 조작
// <div id ="app" > hi < /div>
// document.querySelector('#app')
let div = document.querySelector('div') as HTMLDivElement;
div.innerText;
