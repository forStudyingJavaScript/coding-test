function solution(topping) {
  const n = topping.length;
  
  // 왼쪽에서 오른쪽으로의 토핑 종류 수
  const leftSet = new Set();
  const leftCount = new Array(n).fill(0);
  
  for (let i = 0; i < n; i++) {
    leftSet.add(topping[i]);
    leftCount[i] = leftSet.size;
  }

  // 오른쪽에서 왼쪽으로의 토핑 종류 수
  const rightSet = new Set();
  const rightCount = new Array(n).fill(0);
  
  for (let i = n - 1; i >= 0; i--) {
    rightSet.add(topping[i]);
    rightCount[i] = rightSet.size;
  }

  // 공평하게 나누는 방법의 수를 카운트
  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    if (leftCount[i] === rightCount[i + 1]) {
      result++;
    }
  }
  
  return result;
}