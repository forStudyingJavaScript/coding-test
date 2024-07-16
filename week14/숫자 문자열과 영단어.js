function solution(s) {
  const numberWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  
  numberWords.forEach((word, index) => {
      s = s.split(word).join(index);
  });
  
  return +s;
}

console.log(solution("one4seveneight")); //1478
console.log(solution("23four5six7")); //234567
console.log(solution("2three45sixseven")); //234567
console.log(solution("123")); //123
