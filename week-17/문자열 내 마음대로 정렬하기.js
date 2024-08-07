function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) return a.localeCompare(b);
    else return a[n].localeCompare(b[n]);
  });
}

console.log(solution(["sun", "bed", "car"], 1)); //["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)); //["abcd", "abce", "cdx"]