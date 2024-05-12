function solution(id_pw, db) {
  for (const [username, password] of db) {
    if (username === id_pw[0]) {
      if (password === id_pw[1]) return 'login';
      return 'wrong pw';
    }
  }
  return 'fail';
}

// function solution(id_pw, db) {
//   const [id, pw] = id_pw;
//   const map = new Map(db);
//   return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail';
// }

console.log(solution(["meosseugi", "1234"], [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]])); // "login"
console.log(solution(["programmer01", "15789"], [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]])); // "wrong pw"
console.log(solution(["rabbit04", "98761"], [["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]])); // "wrong pw"