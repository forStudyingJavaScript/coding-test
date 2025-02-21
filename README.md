## 1

### 문제 - <code>할인행사</code>

### 알고리즘 설계

(왜 이렇게 코드를 작성했는지 이유를 적어주세요)

### 풀이 코드

```jsx
function solution(want, number, discount) {
  let cnt = 0;
  let i = 0;
  const period = 10;

  while (i <= discount.length - period) {
    let arr = discount.slice(i, i + period);
    let vaild = true;

    for (let j = 0; j < want.length; j++) {
      let count = arr.reduce((a, e) => {
        if (want[j] === e) a++;
        return a;
      }, 0);
      if (count !== number[j]) {
        vaild = false;
        break;
      }
    }
    if (vaild) cnt++;

    i++;
  }

  return cnt;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)

## 2

### 문제 - <code>프로세스</code>

### 알고리즘 설계

### 풀이 코드

```jsx
function solution(priorities, location) {
  let answer = 0;
  let arr = [];
  let max_value = Math.max(...priorities);

  // 위치 배열 만들기
  for (let i = 0; i < priorities.length; i++) {
    arr.push(i);
  }

  // priorities 배열이 비어있을 때까지 반복
  while (priorities.length != 0) {
    max_value = Math.max(...priorities);

    if (priorities[0] < max_value) {
      priorities.push(priorities.shift());
      arr.push(arr.shift());
    } else {
      answer += 1;
      priorities.shift();
      if (arr.shift() == location) return answer;
    }
  }
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)

## 3

### 문제 - <code>하노이의탑</code>

### 알고리즘 설계

(왜 이렇게 코드를 작성했는지 이유를 적어주세요)

### 풀이 코드

```jsx
function solution(n) {
  const moves = [];

  // 재귀적으로 원판을 움직이는 함수
  function hanoi(n, from, to, aux) {
    if (n === 1) {
      // 원판이 하나일 때는 직접 목적지로 이동
      moves.push([from, to]);
      return;
    }

    // n-1개의 원판을 보조 기둥으로 이동
    hanoi(n - 1, from, aux, to);

    // 가장 큰 원판을 목적지로 이동
    moves.push([from, to]);

    // n-1개의 원판을 보조 기둥에서 목적지로 이동
    hanoi(n - 1, aux, to, from);
  }

  // 1번 기둥에서 3번 기둥으로 n개의 원판을 이동
  hanoi(n, 1, 3, 2);

  return moves;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)
