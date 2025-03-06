function solution(s) {
    let stack = [];

    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // 짝이 맞으면 제거
        } else {
            stack.push(char); // 그렇지 않으면 추가
        }
    }

    return stack.length === 0 ? 1 : 0;
}