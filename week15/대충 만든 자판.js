function solution(keymap, targets) {
  const keypressMap = {};

  keymap.forEach(keys => {
      keys.split('').forEach((char, index) => {
          if (!keypressMap[char] || keypressMap[char] > index + 1) {
              keypressMap[char] = index + 1;
          }
      });
  });

  return targets.map(target => {
      let totalPresses = 0;
      for (const char of target) {
          if (!keypressMap[char]) return -1;
          totalPresses += keypressMap[char];
      }
      return totalPresses;
  });
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); //[9, 4]
console.log(solution(["AA"], ["B"])); //[-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); //[4, 6]
