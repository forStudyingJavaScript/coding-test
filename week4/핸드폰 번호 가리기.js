const solution = phone_number => [...phone_number].map((el, i) => i < phone_number.length - 4? '*' : el).join('');
// TC = O(n), SC = O(n)

// const solution = phone_number => [...phone_number].fill('*', 0, phone_number.length - 4).join('');
// // TC = O(n), SC = O(n)

// const solution = phone_number => phone_number.replace(/\d(?=\d{4})/g, "*");
// // TC = O(n), SC = O(n)
// '\d' - This matches any digit from 0 to 9.
// '(?=\d{4})' - This is a positive lookahead assertion. It checks for a position where the following characters are exactly four digits (\d{4}), but it does not consume these characters as part of the match. It only asserts whether they exist following the current position.
// 'g' - This is the global flag, indicating that the pattern should be applied to all matches in the string, not just the first one.


console.log(solution("01033334444")); //"*******4444"
console.log(solution("027778888")); //"*****8888"