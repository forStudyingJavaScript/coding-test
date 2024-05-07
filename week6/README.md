# week6

## 1

### 문제 - <code>배열 조각하기</code>

### 알고리즘 설계

짝수 일 때, 뒷부분을
홀수 일 때, 앞부분을 자르는 문제라서
slice를 떠올려 풀었는데요.

답이 나오지 않아서 엄청 헤맸네요..

### 풀이 코드

```javascript
// 방법 1
const solutionX = (arr, query) => {
  for (let i = 0; i < query.length; i++) {
    i % 2 ? arr.slice(query[i], arr.length) : arr.slice(0, query[i] + 1);
  }
  return arr;
};
```

```javascript
// 방법 2 : concat 추가
const solutionX = (arr, query) => {
  for (let i = 0; i < query.length; i++) {
    i % 2 ? arr.slice(query[i], arr.length) : arr.slice(0, query[i] + 1);
  }
  return arr;
};
```

### 개인적인 회고와 다른 풀이

slice로는 도저히 답이 나오지 않을 것 같아서 찾아보았는데요.
slice는 새로운 배열을 반환하기 때문에, 문제에 적합하지 않았습니다.

splice()를 이용하여 답을 구할 수 있었습니다.

splice()함수는 배열을 수정하여 필요에 따라 배열을 자르고 새로운 요소를 추가할 수 있는 함수 입니다.

```javascript
// 방법 1 : for문
const solution1 = (arr, query) => {
  for (let i = 0; i < query.length; i++) {
    i % 2 ? arr.splice(0, query[i]) : arr.splice(query[i] + 1);
  }
  return arr;
};

// 방법 2 : 함수형(forEach)
const solution2 = (arr, query) => {
  query.forEach((q, i) => {
    i % 2 === 0 ? arr.splice(q + 1, arr.length) : arr.splice(0, q);
  });
  return arr;
};
```

### 느낀 점

slice함수는 원본 배열을 변경하지 않고 새로운 배열을 반환한다는 것을 다시 공부하게 되었어요.

## 2

### 문제 - <code>개미 군단 (120837)</code>

### 알고리즘 설계

장군개미, 병정개미, 일개미의 변수를 만들어
그 합을 더해 값을 구하도록 했습니다.

### 풀이 코드

```javascript
const solution1 = (hp) => {
  const bossAnt = Math.floor(hp / 5);
  const soldierAnt = Math.floor((hp % 5) / 3);
  const workerAnt = (hp % 5) % 3;

  return bossAnt + soldierAnt + workerAnt;
};

const solution2 = (hp) =>
  Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
```

### 개인적인 회고와 다른 풀이

변수를 만들어 작성하면 한눈에 값에 대한 데이터를 보여줄 수 있지만,
식이 간결한 방법은 값 자체를 더하는게 깔끔해 보입니다.
상황에 따라 다르게 사용할 수 있을 것 같아요 ㅎㅎ

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)

## 3

### 문제 - <code>가위바위보 (120839) </code>

### 알고리즘 설계

객체로 필승 가위바위보 값을 만든 후, 맵으로 돌려 이기는 값을 반환합니다.

### 풀이 코드

```javascript
const solution1 = (rsp) => {
  let 필승 = {
    2: 0,
    0: 5,
    5: 2,
  };

  return [...rsp].map((i) => 필승[i]).join("");
};
```

### 개인적인 회고와 다른 풀이

삼항연산자를 이용하여 객체 없이 이기는 값을 적용하였습니다.
다른 사람 풀이를 보니 삼항연산자로 푼 식이 있어서 저도 따라 풀어보고, 제가 푼 식도 다시 삼항으로 풀어 보았습니다.

```javascript
// 방법 2 forOf문
const solution2 = (rsp) => {
  for (let i of rsp) {
    i === "2" ? 0 : i === "0" ? 5 : 2;
  }
  return rsp;
};

// 방법 3
const solution3 = (rsp) =>
  [...rsp].map((i) => (i === "2" ? 0 : i === "0" ? 5 : 2)).join("");
```

### 느낀 점

프로그래머스에 제출하면 값이
"0"
"052"
이렇게 나오는데

vscode에서는
0
052
왜 이렇게 나올까용..

## 4

### 문제 - <code>제일 작은 수 제거하기(12935)</code>

### 알고리즘 설계

1번문제에서 학습한 splice를 이용하여
가장 작은 수를 제거하여 풀어 보았습니다.

### 풀이 코드

```javascript
const solution = (arr) => {
  if (arr.length === 1) {
    arr = [-1];
  } else {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
  }
  return arr;
};
```

### 개인적인 회고와 다른 풀이

필터를 이용한 풀이가 있어서 저도 따라서 풀어 보았어요!

```javascript
const solution2 = (arr) =>
  arr.length === 1 ? [-1] : arr.filter((i) => i !== Math.min(...arr));
```

### 느낀 점

filter 문제를 보고 제 문제도 삼항으로 다시 풀어봤는데 값이 자꾸 틀리더라구요?...뭐가 문제일까요🧐

```javascript
const solution = (arr) =>
  arr.length === 1 ? [-1] : arr.splice(arr.indexOf(Math.min(...arr)), 1);
```

## 5

### 문제 - <code>약수의 개수와 덧셈(77884)</code>

### 알고리즘 설계

for문을 이용하여 left부터 right까지 돌아
약수를 구한 뒤,
짝수 일 때는 더하고
홀수 일 때는 빼도록 풀었습니다.

### 풀이 코드

```javascript
const solution = (left, right) => {
  let res = 0;

  for (let i = left; i <= right; i++) {
    let p = 1;
    for (j = 2; j <= i; j++) {
      if (i % j === 0) p++;
    }

    p % 2 === 0 ? (res += i) : (res -= i);
  }
  return res;
};
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

(풀면서 느낀점 이외에도 기억할 점이나 같이 논의하고 싶은 부분 등이 있다면 자유롭게 적어주세요)
