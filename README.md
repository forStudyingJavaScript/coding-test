## 1

### 문제 - <code>배열 원소의 길이 (120854)</code>

### 알고리즘 설계

1. for문
   strlist를 순회하며 각 인덱스값의 길이를 반환한다.

### 풀이 코드

```javascript
const solution = (strlist) => {
  const res = [];
  for (let i = 0; i < strlist.length; i++) {
    res[i] = strlist[i].length;
  }
  return res;
};
```

### 개인적인 회고와 다른 풀이

2. 함수형

- map을 이용하여 요소의 길이를 새로운 배열로 반환한다.
  > [자바스크립트-map-함수](https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-map-%ED%95%A8%EC%88%98/)

```javascript
const solution = (strlist) => strlist.map((el) => el.length);
```

### 느낀 점

맵함수는 필터 메서드와 함께 배열을 이용할 때 자주 사용하게 되는 것 같습니다.
함수를 사용하면 확실히 코드가 간결하고 읽기 쉬운 것 같습니다.

## 2

### 문제 - <code>외계행성의 나이 (120834)</code>

### 알고리즘 설계

1. for문

- 문자 배열을 만들고, for문으로 age의 인덱스의 알파벳 인덱스 값을 찾아 반환한다.

### 풀이 코드

```javascript
const solution = (age) => {
  let res = "";

  const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  age = age + "";

  for (let i = 0; i < age.length; i++) {
    res += alpha[age[i]];
  }
  return res;
};
```

### 개인적인 회고와 다른 풀이

2. 함수형

- map()을 이용하여 문자열 인덱스를 찾아 새로운 배열을 생성한다.

```javascript
const solution = (age) =>
  (age = (age + "")
    .split("")
    .map((v) => "abcdefghij"[v])
    .join(""));
```

### 느낀 점

지난주에 split을 사용한 코드가 있었는데요. 그때 스프레드가 최신버전이라고 공부했던 기억이나서,
split 대신 스프레드 연산자를 사용해보려고 했는데 실패했습니다... 좀더 공부가 필요한 거 같습니다.

## 3

### 문제 - <code>배열 회전시키기 (120844)</code>

### 알고리즘 설계

1. 배열의 값을 잘라서 좌/우로 붙이는 방법을 생각해 보았다.

- slice()를 이용하여 값 자르기
- numbers는 유지하면서 새로운 배열 생성해야 하므로 스프레드 연산자를 이용

### 풀이 코드

```javascript
const solution = (numbers, direction) => {
  let res = [];

  if (direction === "rigth") {
    res = [
      numbers[numbers.length - 1],
      ...numbers.slice(0, numbers.length - 1),
    ];
  } else {
    res = [...numbers.slice(1), numbers[0]];
  }
  return res;
};
```

### 개인적인 회고와 다른 풀이

2. 삼항연산자로 정리
   코드가 너무 길어져서 더 정리할 수 있는 방법을 찾아보았다.

```javascript
const solution = (numbers, direction) =>
  direction === "left"
    ? [...numbers.slice(1), numbers[0]]
    : [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)];
```

### 느낀 점

잘라서 좌우로 붙이는 방법이 바로 생각나서 slice를 이용했는데, 시작- 종료 값에서 좀 애를 먹었네요.

## 4

### 문제 - <code>서울에서 김서방 찾기</code>

### 알고리즘 설계

1. indexOf() : 문자열 객체에서 주어진 값과 일치하는 인덱스를 반환. 찾고자하는 값이 명확하게 주어질 때 사용할 수 있다.

### 풀이 코드

```javascript
const solution = (seoul) => "김서방은 " + seoul.indexOf("Kim") + "에 있다";
```

### 개인적인 회고와 다른 풀이

findIndex() : ES6에 도입된 메서드. 콜백 함수를 사용하여 배열의 각 요소에 대해 특정 조건을 테스트하고, 조건을 만족하는 첫 번째 요소의 인덱스를 반환한다.

```javascript
const solution = (seoul) =>
  `김서방은 ${seoul.findIndex((s) => s === "Kim")}에 있다`;
```

### 느낀 점

제출하고 findIndex() 메서드 풀이가 있었는데요.
findIndex() 메서드가 indexOf() 메서드보다 ES6 최신 버전으로 추천하고 있어서 공부하게 되었습니다.
두 메서드 모두 찾고자하는 값의 첫번째 인덱스를 반환하고 있는 점은 같지만, findIndex() 메서드의 경우 함수호출이 가능하다는 점이 다른 것 같습니다.

단순히 값을 찾을 때는 indexOf()가 좋고, 추가적인 함수나 조건이 필요할 때는 findIndex() 메서드가 더 좋을 것 같다는 생각이 들었어요.
공부하면서 무조건 최신버전이 좋다기 보다는 어울리는 상황에 사용하는게 좋지 않을까 저는 생각이 들었는데..
그렇더라도 같은 방식이라면 최신버전을 쓰는게 더 좋은 걸지, 여러분은 어떻게 생각하시나요?

## 5

### 문제 - <code>없는 숫자 더하기</code>

### 알고리즘 설계

1. for문 이용

- 0부터 9까지 더한 값 45에서 numbers의 총 합을 뺀다.

### 풀이 코드

```javascript
const solution = (numbers) => {
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i];
  }
  return 45 - res;
};
```

### 개인적인 회고와 다른 풀이

2. 함수형

- includes() : includes()메서드는 배열의 항목에 특정 값이 포함되어 있는지를 판단한다.

```javascript
const solution = (numbers) => {
  let res = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) res += i;
  }
  return res;
};
```

### 느낀 점

for문으로 금방 풀 수 있었는데, 함수형은 생각나지 않아서 includes() 에 대해 공부하며 다시 풀어보았습니다.

## 6

### 문제 - <code>x만큼 간격이 있는 n개의 숫자</code>

### 알고리즘 설계

1.

- for문으로 x값을 n만큼 순회하여 값을 더한다.
- 더한 값을 push하여 배열에 추가한다.

### 풀이 코드

```javascript
const solution = (x, n) => {
  let res = [];

  for (i = x; n > res.length; i += x) res.push(i);
  return res;
};
```

### 개인적인 회고와 다른 풀이

2. 함수형

- Array
- map()
- fill() : fill() 메서드는 배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경. 수정된 배열을 반환한다.

```javascript
const solution = (x, n) =>
  Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
```

### 느낀 점

문제를 풀때 기본부터 풀어보려고 항상 하는데
프로그래머스에서 for문을 이용한 문제에 비웃음의 댓글이 난무하더라구요,,, 실무에서는 물론 메서드를 활용한 코드를 많이 사용하겠지만, 공부하는 입장에서 이렇게 비웃음 당할 일인가 조금 창피했네요... 더 열심히 해야겠습니다 🥲
