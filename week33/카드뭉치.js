function solution(cards1, cards2, goal) {
  for (let i = 0; i < 20; i++) {
    if (goal[0] === cards1[0]) {
      goal.shift();
      cards1.shift();
    } else if (goal[0] === cards2[0]) {
      goal.shift();
      cards2.shift();
    } else {
      return "No";
    }
  }
  return goal.length === 0 ? "Yes" : "No";
}
