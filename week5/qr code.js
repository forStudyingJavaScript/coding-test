const solution = (q, r, code) => [...code].map((_, i) => i)
                                          .filter(index => index % q === r)
                                          .map(index => code[index])
                                          .join('');
// TC = O(n); SC = O(n); 

// const solution = (q, r, code) => [...code].filter((_, i) => i % q === r).join('');

console.log(solution(3, 1, "qjnwezgrpirldywt")); //'jerry'
console.log(solution(1, 0, "programmers")); //'programmers'