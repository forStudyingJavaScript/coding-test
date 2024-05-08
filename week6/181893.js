/* 
배열 조각하기(181893) 

정수 배열 arr와 query가 주어집니다.

query를 순회하면서 다음 작업을 반복합니다.

짝수 인덱스에서는 arr에서 query[i]번 인덱스를 제외하고 배열의 query[i]번 인덱스 뒷부분을 잘라서 버립니다.
홀수 인덱스에서는 arr에서 query[i]번 인덱스는 제외하고 배열의 query[i]번 인덱스 앞부분을 잘라서 버립니다.
위 작업을 마친 후 남은 arr의 부분 배열을 return 하는 solution 함수를 완성해 주세요.
*/

const solution = (arr, query) => {
  let res = [...arr];
  for (let i = 0; i < query.length; i++) {
    i % 2 === 0
      ? (res = res.slice(0, query[i] + 1))
      : (res = res.slice(query[i]));
  }
  return res;
};

const solution1 = (arr, query) => {
  for (let i = 0; i < query.length; i++) {
    i % 2 ? arr.splice(0, query[i]) : arr.splice(query[i] + 1);
  }
  return arr;
};

const solution2 = (arr, query) => {
  query.forEach((q, i) => {
    i % 2 === 0 ? arr.splice(q + 1, arr.length) : arr.splice(0, q);
  });
  return arr;
};

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2]));
