### React의 Styled Component를 알기 위한 사전 지식!
# Rest Parameter
```typescript
function sum(...nums: number[]): number {
  return nums.reduce((result, current, currentIndex): number => result + current);
}
let resultUsingRestParam: number = sum(1, 2, 3, 4);
console.log(resultUsingRestParam);
```
 - Rest Parameter를 통해 매개변수로 여러개의 값을 전달 할수 있다.
 - 파이썬의 *args, \**args 유사한것

# Template Literals
```typescript
let a: number = 2;
let b: number = 3;
console.log(`a와 b를 더하면 ${a + b} 입니다.`);
```
 - Template Literals는 문자열과 표현식을 조금 더 쉽게 사용할수 있다.
 - String Interpolation이라고 한다.

# Tagged Function
```typescript
function tagFunction(str: TemplateStringsArray, ...values: string[]): string {
  return str.reduce((res: string, current: string, index: number): string => {
    let text: string = res + current;
    if (values[index]) text += values[index];
    return text;
  }, "");
}
let resUsingTagFunction: string = tagFunction`지훈이들 모임 참석자는 ${"김지훈"}, ${"오지훈"}, ${"이지훈"}, ${"박지훈"} 입니다.`;
console.log(resUsingTagFunction);
```
 - Tagged Function을 사용하면 첫 매개변수에 순수 String을 두번째 매개변수에는 Interpolation(${}) 인자를 넘겨준다.
 - 잘 사용하면 편할것 같다.
