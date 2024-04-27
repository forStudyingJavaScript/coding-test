const solution = n => {
  let res = [n];

  while (n > 1) {
    if (n % 2 === 0) n = n / 2;
    else n = 3 * n + 1;
    res.push(n);
  }

  return res;
};
// TC = O(log n), SC = O(log n)
// 시간과 공간 복잡도는 n에 대해 수행되는 연산의 횟수로 측정됩니다. 이 경우, n이 1에 도달할 때까지 반복되는 루프의 실행 횟수는 n의 초기 값에 따라 다릅니다. 최악의 경우, Collatz 수열은 n에 따라 매우 길어질 수 있으며, 그 길이를 정확하게 예측하기는 어렵습니다. 따라서 이 함수의 시간과 공간 복잡도는 O(log n)입니다.

console.log(solution(10)); //[10, 5, 16, 8, 4, 2, 1]