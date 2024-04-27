const solution = (s1, s2) => s1.filter(n => s2.includes(n)).length;

console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c'])); //2
console.log(solution(['n', 'omg', 'c'], ['m', 'dot'])); //0