function solution(new_id) {
  let result = new_id.toLowerCase()
                       .replace(/[^a-z0-9-_.]/g, '')
                       .replace(/\.{2,}/g, '.')
                       .replace(/^\.|\.$/g, '')
                       .replace(/^$/, 'a')
                       .slice(0, 15).replace(/\.$/, '');
  
  const length = result.length;
  return result += length < 3? result[length - 1].repeat(3 - length) : "";
}

function solution(new_id) {
  let result = new_id.toLowerCase()
                     .replace(/[^a-z0-9-_.]/g, '')
                     .replace(/\.{2,}/g, '.')
                     .replace(/^\.|\.$/g, '')
                     .replace(/^$/, 'a')
                     .slice(0, 15).replace(/\.$/, '')

  result = result.padEnd(3, result[result.length - 1]);
  return result;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm")); // "bat.y.abcdefghi"
console.log(solution("z-+.^.")); // "z--"
console.log(solution("=.=")); // "aaa"
console.log(solution("123_.def")); // "123_.def"
console.log(solution("abcdefghijklmn.p")); // "abcdefghijklmn"
