function solution(numbers) {
  const result = new Array(numbers.length).fill(-1);
  const stack = []; // [index, value]

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]]) {
      result[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }

  return result;
}
