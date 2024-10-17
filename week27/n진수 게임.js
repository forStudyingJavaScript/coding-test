function solution(n, t, m, p) {
  let sequence = '';
  let number = 0;
  
  function toBaseN(num, base) {
    return num.toString(base).toUpperCase();
  }

  while (sequence.length < t * m) {
    sequence += toBaseN(number, n);
    number++;
  }

  let result = '';
  for (let i = 0; i < t; i++) {
    result += sequence[(i * m) + (p - 1)];
  }
  
  return result;
}
