const solution = n => [...n + ''].reverse().map(Number);

console.log(solution('12345')); //[ 5, 4, 3, 2, 1 ]