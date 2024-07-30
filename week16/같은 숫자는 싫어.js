function solution(arr) {
  return arr.filter((el, index) => el !== arr[index + 1]);
}

function solution(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i])
    }
  }

  return result;
}

console.log(solution([1,1,3,3,0,1,1])); //[1,3,0,1]
console.log(solution([4,4,4,3,3])); //[4,3]