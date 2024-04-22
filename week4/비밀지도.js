const solution = (n, arr1, arr2) => {
  const decodedArr1 = arr1.map(el => '0'.repeat(n - el.toString(2).length) + el.toString(2))
                          .map(el => el.replaceAll('0', ' ').replaceAll('1', '#'))
                          .join('');
  const decodedArr2 = arr2.map(el => '0'.repeat(n - el.toString(2).length) + el.toString(2))
                          .map(el => el.replaceAll('0', ' ').replaceAll('1', '#'))
                          .join('');
  
  const combined = Array.from({ length: n * n }, (el, i) => {
    if (decodedArr1[i] === '#' || decodedArr2[i] === '#') return '#';
    else return ' ';
  });

  return Array.from({ length: n }, (_, i) => combined.slice(i * n, (i + 1) * n).join(''));
};
// TC = O(n^2), SC = O(n^2)

// const solution = (n, arr1, arr2) => arr1.map((el, i) => (el | arr2[i]).toString(2).padStart(n, 0).replace(/0/g,' ').replace(/1/g,'#'));
// // TC = O(n^2), SC = O(n)

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); //["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10])); //["######", "### #", "## ##", " #### ", " #####", "### # "]