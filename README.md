## 1

### 문제 - <code>귤 고르기</code>

### 알고리즘 설계

1. 귤 크기 정렬

- 입력된 귤 배열을 크기 순으로 정렬
- 예) [1,3,2,5,4,5,2,3] → [1,2,2,3,3,4,5,5]

2. 같은 크기 개수 세기

- 정렬된 배열에서 연속된 같은 크기의 개수를 세어서 새 배열 저장
- 예) [1,2,2,3,3,4,5,5] → size=[1,2,2,1,2] (1개, 2개, 2개, 1개, 2개)

3. 개수 정렬

- 구한 size 배열을 내림차순으로 정렬
- 많은 것부터 적은 순으로 정렬
- 예) size=[1,2,2,1,2] → [2,2,2,1,1]

4. 필요한 종류 수 계산

- k개의 귤을 고르기 위해
- 개수가 많은 크기부터 하나씩 선택
- k에서 선택한 개수를 빼면서 카운트
- 카운트된 숫자가 필요한 최소 크기 종류의 수

5. 결과 반환

- 선택된 크기 종류의 수를 반환

(왜 이렇게 코드를 작성했는지 이유를 적어주세요)

### 풀이 코드

```jsx
function solution(k, tangerine) {
  let size = [];
  let q = 0;
  tangerine = tangerine.sort((a, b) => a - b);
  for (let i = 0; i < tangerine.length; i++) {
    if (tangerine[i + 1] !== tangerine[i]) {
      size.push(i + 1 - q);
      q = i + 1;
    }
  }
  size = size.sort((a, b) => b - a);
  let i = 0;
  let cnt = 0;
  while (k > 0) {
    k = k - size[i];
    cnt++;
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

### 문제 - <code>괄호 회전하기</code>

### 알고리즘 설계

1. 문자열 준비

- 입력받은 문자열 s를 배열로 변환 (s.split(""))
  회전을 위해 길이만큼 반복할 준비

2. 회전 시작

- 문자열 길이만큼 반복하면서
  매 반복마다 새로운 스택을 생성하고
  첫 글자를 떼서 맨 뒤로 이동 (회전)

3. 각 회전마다 괄호 검사
   현재 문자열의 각 문자를 스택에 push
   스택에 2개 이상 쌓이면 최근 2개를 꺼내서 확인

   - [], (), {} 쌍이 맞으면 제거 (continue)ㄴ
     안 맞으면 다시 스택에 넣기

4. 검사 결과 확인
   스택이 비어있으면 (size가 0)
   모든 괄호가 올바르게 매칭된 것
   cnt 증가

5. 다음 회전
   첫 글자를 떼서 맨 뒤로 보내고
   2~4단계 반복

6. 최종 결과
   cnt 반환 (올바른 괄호 문자열이 되는 경우의 수)

### 풀이 코드

```jsx
class Stack {
  constructor() {
    this.size = 0;
    this.storage = new Object();
  }
  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }
  pop() {
    if (this.size === 0) return;
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }
  top() {
    return this.size === 0 ? undefined : this.storage[this.size];
  }
}

function solution(s) {
  let stack = new Stack();
  let cnt = 0;
  let strArray = s.split("");

  for (let j = 0; j < s.length; j++) {
    stack = new Stack();
    for (let i = 0; i < strArray.length; i++) {
      stack.push(strArray[i]);
      if (stack.size > 1) {
        let top1 = stack.pop();
        let top2 = stack.pop();

        if (
          (top2 === "[" && top1 === "]") ||
          (top2 === "(" && top1 === ")") ||
          (top2 === "{" && top1 === "}")
        ) {
          continue;
        } else {
          stack.push(top2);
          stack.push(top1);
        }
      }
    }

    if (stack.size === 0) cnt++; // 스택이 비어있다면 균형이 맞음

    // 문자열 회전
    strArray.push(strArray.shift());
  }

  return cnt;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)

## 3

### 문제 - <code>예상 대진표</code>

### 알고리즘 설계

1. a와 b는 각 참가자의 번호
2. 각 라운드마다 참가자 번호는 2로 나누고 올림을 해서 다음 라운드 번호가 됨

예: 1,2 → 1로 / 3,4 → 2로

3. 두 참가자의 다음 라운드 번호가 같아질 때까지 이 과정을 반복
4. cnt는 라운드 수를 카운트

(왜 이렇게 코드를 작성했는지 이유를 적어주세요)

### 풀이 코드

```jsx
function solution(n, a, b) {
  let cnt = 1;
  while (Math.ceil(a / 2) !== Math.ceil(b / 2)) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    cnt++;
  }

  return cnt;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)
