//tag function
function tagFunction(str: TemplateStringsArray, ...values: string[]): string {
  return str.reduce((res: string, current: string, index: number): string => {
    let text: string = res + current;
    if (values[index]) text += values[index];
    return text;
  }, "");
}
let resUsingTagFunction: string = tagFunction`지훈이들 모임 참석자는 ${"김지훈"}, ${"오지훈"}, ${"이지훈"}, ${"박지훈"} 입니다.`;
console.log(resUsingTagFunction);
