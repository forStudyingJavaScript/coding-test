## 1

### 문제 - <code>퍼즐게임챌린지</code>

### 알고리즘 설계

(왜 이렇게 코드를 작성했는지 이유를 적어주세요)

### 풀이 코드

```jsx
function solution(diffs, times, limit) {
  function canSolve(level) {
    let total = 0;

    for (let i = 0; i < diffs.length; i++) {
      if (diffs[i] <= level) {
        if (total + times[i] > limit) return false;
        total += times[i];
      } else {
        const fails = diffs[i] - level;
        const retryTime = times[i] + (i > 0 ? times[i - 1] : 0);

        if (fails > limit || retryTime > Math.floor(limit / fails))
          return false;
        const timeNeeded = retryTime * fails + times[i];
        if (timeNeeded > limit || total + timeNeeded > limit) return false;
        total += timeNeeded;
      }
    }
    return true;
  }

  let left = 1;
  let right = 1000000;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (canSolve(mid)) right = mid;
    else left = mid + 1;
  }

  return left;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)

## 2

### 문제 - <code>아날로그시계</code>

### 알고리즘 설계

### 풀이 코드

```jsx

```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)

## 3

### 문제 - <code>연속된부분수열의합</code>

### 알고리즘 설계

(왜 이렇게 코드를 작성했는지 이유를 적어주세요)

### 풀이 코드

```jsx
function solution(sequence, k) {
  let left = 0;
  let right = 0;
  let sum = sequence[0];
  let minLen = Infinity;
  let result = [];

  while (right < sequence.length) {
    if (sum === k) {
      const len = right - left + 1;
      if (len < minLen) {
        minLen = len;
        result = [left, right];
      }
      sum -= sequence[left++];
      if (right + 1 < sequence.length) sum += sequence[++right];
    } else if (sum < k) {
      if (right + 1 < sequence.length) sum += sequence[++right];
      else break;
    } else {
      sum -= sequence[left++];
    }
  }

  return result;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)
