function solution(keyinput, board) {
  let a = 0;
  let b = 0;
  let Amax = Math.trunc(board[0] / 2);
  let Bmax = Math.trunc(board[1] / 2);
  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "right" && a + 1 <= Amax) a++;
    if (keyinput[i] === "left" && a - 1 >= -Amax) a--;
    if (keyinput[i] === "up" && b + 1 <= Bmax) b++;
    if (keyinput[i] === "down" && b - 1 >= -Bmax) b--;
  }
  return [a, b];
}
