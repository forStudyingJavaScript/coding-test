function solution(keyinput, board) {
  const maxX = Math.trunc(board[0] / 2);
  const maxY = Math.trunc(board[1] / 2);
  
  const res = keyinput.reduce((arr, el) => {
    if (el === 'left' && arr[0] > -maxX) arr[0] -= 1;
    else if (el === 'right' && arr[0] < maxX) arr[0] += 1;
    else if (el === 'down' && arr[1] > -maxY) arr[1] -= 1;
    else if (el === 'up' && arr[1] < maxY) arr[1] += 1;

    return arr;
  }, [0, 0]);

  return res;
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11])); //[2, 1]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); //[0, -4]