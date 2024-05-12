function solution(absolutes, signs) {
  return absolutes.reduce((acc, current, index) =>
    signs[index] ? acc + current : acc - current, 0);
}

console.log(solution([4,7,12], [true, false, true])); //9
console.log(solution([1,2,3], [false,false,true])); //0