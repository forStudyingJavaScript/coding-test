## 1

### 문제 - <code>주식가격</code>

### 알고리즘 설계

(왜 이렇게 코드를 작성했는지 이유를 적어주세요)

### 풀이 코드

```jsx
function solution(prices) {
  const len = prices.length;
  const result = new Array(len).fill(0);
  const stack = [];

  for (let i = 0; i < len; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let top = stack.pop();
      let diff = i - top;
      result[top] = diff;
    }
    stack.push(i);
  }
  while (stack.length) {
    const top = stack.pop();
    result[top] = len - 1 - top;
  }

  return result;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)

## 2

### 문제 - <code>스킬트리</code>

### 알고리즘 설계

### 풀이 코드

```jsx
function solution(skill, skill_trees) {
  let result = 0;

  for (const tree of skill_trees) {
    const queue = [...skill];
    let isValid = true;

    for (const s of tree) {
      if (skill.includes(s)) {
        if (s !== queue[0]) {
          isValid = false;
          break;
        }
        queue.shift();
      }
    }
    if (isValid) result++;
  }
  return result;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)

## 3

### 문제 - <code>택배상자</code>

### 알고리즘 설계

(왜 이렇게 코드를 작성했는지 이유를 적어주세요)

### 풀이 코드

```jsx
function solution(order) {
  let result = 0;
  const stack = [];
  let orderIndex = 0; // order 배열의 인덱스를 관리

  for (let i = 1; i <= order.length; i++) {
    stack.push(i);

    // 스택의 top이 현재 찾는 순서와 일치하면 처리
    while (stack.length && stack[stack.length - 1] === order[orderIndex]) {
      stack.pop();
      orderIndex++;
      result++;
    }
  }

  return result;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)
