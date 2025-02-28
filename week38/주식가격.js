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
