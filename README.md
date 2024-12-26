## 1

### 문제 - <code>모음사전</code>

### 알고리즘 설계

### 풀이 코드

```jsx
function solution(word) {
  // 각 자리수별 영향도 계산
  // 1번째 자리: 1
  // 2번째 자리: 1 + 5
  // 3번째 자리: 1 + 5 + 25
  // 4번째 자리: 1 + 5 + 25 + 125
  // 5번째 자리: 1 + 5 + 25 + 125 + 625
  const weight = [781, 156, 31, 6, 1];
  const vowels = ["A", "E", "I", "O", "U"];

  let answer = 0;

  // 각 자리수별로 계산
  for (let i = 0; i < word.length; i++) {
    // 현재 문자가 몇번째 모음인지 찾기
    const vowelIndex = vowels.indexOf(word[i]);
    // 해당 자리수의 가중치를 곱하여 더함
    answer += vowelIndex * weight[i] + 1;
  }

  return answer;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)

## 2

### 문제 - <code>영어끝말잇기</code>

### 알고리즘 설계

### 풀이 코드

```jsx
function solution(n, words) {
  let cnt = 0;
  let person = 1;
  let past = [];
  for (let i = 0; i < words.length; i++) {
    if (i % n === 0) cnt++;
    person = (i % n) + 1; // 참가자 번호 계산 수정
    if (i > 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      return [person, cnt];
    }
    if (past.includes(words[i])) {
      return [person, cnt];
    }
    past.push(words[i]);
  }
  return [0, 0];
}
ㄴ;
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)

## 3

### 문제 - <code>카드뭉치</code>

### 알고리즘 설계

### 풀이 코드

```jsx
function solution(cards1, cards2, goal) {
  for (let i = 0; i < 20; i++) {
    if (goal[0] === cards1[0]) {
      goal.shift();
      cards1.shift();
    } else if (goal[0] === cards2[0]) {
      goal.shift();
      cards2.shift();
    } else {
      return "No";
    }
  }
  return goal.length === 0 ? "Yes" : "No";
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)
