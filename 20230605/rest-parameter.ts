function sum(...nums: number[]): number {
  return nums.reduce((result, current, currentIndex): number => result + current);
}
let resultUsingRestParam: number = sum(1, 2, 3, 4);
console.log(resultUsingRestParam);
