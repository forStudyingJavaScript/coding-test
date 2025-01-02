## 1

### 문제 - <code>k진수에서 소수 개수 구하기</code>

### 알고리즘 설계

(왜 이렇게 코드를 작성했는지 이유를 적어주세요)

### 풀이 코드

```jsx
function isPrime(num) {
  // 1 이하는 소수가 아님
  if (num <= 1) return false;

  // 2는 소수
  if (num === 2) return true;

  // 짝수는 소수가 아님 (2 제외)
  if (num % 2 === 0) return false;

  // 제곱근까지만 확인하면 됨
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  // k진수로 변환
  const K_JINSU = n.toString(k);

  // 0을 기준으로 분리
  const splitedArr = K_JINSU.split("0");

  // 각 숫자를 확인하여 소수 개수 카운트
  let count = 0;

  for (let numStr of splitedArr) {
    // 빈 문자열이나 공백은 건너뜀
    if (numStr.trim() === "") continue;

    // 문자열을 숫자로 변환하여 소수 판별
    const num = parseInt(numStr, 10);
    if (isPrime(num)) {
      count++;
    }
  }

  return count;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)

## 2

### 문제 - <code>뒤에 있는 큰 수 찾기</code>

### 알고리즘 설계

### 풀이 코드

```jsx
function solution(numbers) {
  const result = new Array(numbers.length).fill(-1);
  const stack = []; // [index, value]

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]]) {
      result[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }

  return result;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)

## 3

### 문제 - <code>땅 따먹기</code>

### 알고리즘 설계

(왜 이렇게 코드를 작성했는지 이유를 적어주세요)

### 풀이 코드

```jsx
function solution(land) {
  // 행의 개수
  const n = land.length;

  // dp 배열 생성 (첫 행은 그대로 복사)
  const dp = Array.from(Array(n), () => new Array(4).fill(0));
  dp[0] = [...land[0]];

  // 두 번째 행부터 시작
  for (let i = 1; i < n; i++) {
    // 각 열에 대해
    for (let j = 0; j < 4; j++) {
      // 이전 행에서 현재 열을 제외한 값들 중 최댓값을 더함
      dp[i][j] =
        land[i][j] +
        Math.max(...[...dp[i - 1].slice(0, j), ...dp[i - 1].slice(j + 1)]);
    }
  }

  // 마지막 행에서 최댓값을 반환
  return Math.max(...dp[n - 1]);
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)
