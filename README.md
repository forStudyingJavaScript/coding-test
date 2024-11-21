## 1

### 문제 - <code>전화번호 목록</code>

### 알고리즘 설계

### 풀이 코드

```jsx
function solution(phone_book) {
  // 전화번호를 사전순으로 정렬
  phone_book.sort();

  // 인접한 두 전화번호만 비교하면 됨
  for (let i = 0; i < phone_book.length - 1; i++) {
    // 현재 번호가 다음 번호의 접두어인지 확인
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)

## 2

### 문제 - <code>압축</code>

### 알고리즘 설계

### 풀이 코드

```jsx
function solution(msg) {
  // 1. 길이가 1인 모든 단어를 포함하도록 사전 초기화
  const dictionary = {};
  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(65 + i); // A-Z
    dictionary[char] = i + 1;
  }

  const result = [];
  let nextIndex = 27; // 다음 사전 인덱스
  let current = 0; // 현재 처리 중인 문자 위치

  while (current < msg.length) {
    let w = msg[current];
    let maxLen = 1;

    // 2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다
    for (let i = 1; current + i <= msg.length; i++) {
      const testWord = msg.slice(current, current + i);
      if (dictionary[testWord]) {
        w = testWord;
        maxLen = i;
      } else {
        break;
      }
    }

    // 3. w에 해당하는 사전의 색인 번호를 출력
    result.push(dictionary[w]);

    // 4. 다음 글자가 있다면, w+c를 사전에 등록
    if (current + maxLen < msg.length) {
      const nextChar = msg[current + maxLen];
      const newWord = w + nextChar;
      dictionary[newWord] = nextIndex++;
    }

    // 처리된 문자열만큼 현재 위치 이동
    current += maxLen;
  }

  return result;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)

## 3

### 문제 - <code>방문길이</code>

### 알고리즘 설계

### 풀이 코드

```jsx
function solution(dirs) {
  // 방문한 경로를 저장할 Set
  // 경로는 '시작x,시작y:도착x,도착y' 형태의 문자열로 저장
  const visited = new Set();

  // 현재 위치
  let x = 0;
  let y = 0;

  // 방향에 따른 좌표 변화량
  const moves = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  for (const dir of dirs) {
    // 다음 위치 계산
    const nx = x + moves[dir][0];
    const ny = y + moves[dir][1];

    // 경계 체크
    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

    // 양방향 경로를 저장 (A->B와 B->A는 같은 경로)
    const path1 = `${x},${y}:${nx},${ny}`;
    const path2 = `${nx},${ny}:${x},${y}`;

    visited.add(path1);ㄴ
    visited.add(path2);

    // 현재 위치 업데이트
    x = nx;
    y = ny;
  }

  // Set에 저장된 경로 개수의 절반이 실제 처음 걸어본 길의 길이
  // (각 경로를 양방향으로 저장했으므로)
  return visited.size / 2;
}
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)
