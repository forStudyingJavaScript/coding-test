# week5

## 1

### 문제 - <code>flag에 따라 다른 값 반환하기 (181933) </code>

### 알고리즘 설계

참과 거짓 문제로 문제를 보자마자 삼항연산자로 풀어야겠다 떠올랐어요.

### 풀이 코드

```javascript
const solution = (a, b, flag) => flag ? a + b : a - b;
```

### 개인적인 회고와 다른 풀이

```javascript
const solution = (a, b, flag) => {
  if (flag === true) return a + b;
  return a - b;
};
```

### 느낀 점

단순한 참, 거짓 문제라 삼항연산자로 바로 풀었는데
if문보다 한눈에 읽기 쉬운 것 같습니다 ㅎㅎ


## 2

### 문제 - <code>컨트롤 제트 (120853)</code>

### 알고리즘 설계

- split으로 문자열 나누기
- forEach를 이용해서 배열을 순회
- 호출한 값이 "Z"인 경우 이전 인덱스 값 빼기

### 풀이 코드

```javascript
const solution = (s) => {
  let res = 0;
  let arr = s.split(" ");

  arr.forEach((e, i) => {
    if (e === "Z") res -= +arr[i - 1];
    else res += +e;
  });

  return res;
};
```

### 개인적인 회고와 다른 풀이

(풀이 중 힘든 점이 있었다면 왜 힘들었고 어떻게 해결했는지, 아니면 이외의 좋을 것 같은 다른 풀이법이 있다면 같이 작성해주세요)

### 느낀 점

프로그래머의 다른 풀이에 정말 다양한 메서드를 이용한 풀이들이 많아서 신선했어요.
저희 스터디원분들도 어떤 메서드로 푸셨을지 궁금하네요 ㅎㅎ

## 3

### 문제 - <code>qr code (181903) </code>

### 알고리즘 설계

1) 함수형
- map()을 이용하여 순회

```javascript
const solution = (q, r, code) => {
      let res = "";
  [...code].map((a, i) => {
      if (i % q === r) return res += code[i];
      return res;
  });
  return res;
};
```

### 개인적인 회고와 다른 풀이

2) for문

### 풀이 코드

```javascript
const solution1 = (q, r, code) => {
  let res = "";
  for (let i = 0; i < code.length; i++) {
    if (i % q === r) res += code[i];
  }
  return res;
};
```

### 느낀 점

배열을 순회하는 메서드들에 조금은 익숙해진 기분입니다ㅎㅎ