function solution(name, yearning, photo) {
  const yearningScoreMap = {};
  name.forEach((person, i) => {
    yearningScoreMap[person] = yearning[i];
  });

  const answer = photo.map(persons => persons.reduce((sum, person) => sum + (yearningScoreMap[person] || 0), 0));

  return answer;
}


function solution(name, yearning, photo) {
    return photo.map(v=> v.reduce((sum, current)=> sum += yearning[name.indexOf(current)] ?? 0, 0))
}


console.log(solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
)); // [19, 15, 6]

console.log(solution(
  ["kali", "mari", "don"],
  [11, 1, 55],
  [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]
)); // [67, 0, 55]

console.log(solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
)); // [5, 15, 0]
