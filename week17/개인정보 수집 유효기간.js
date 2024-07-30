function solution(today, terms, privacies) {
  function addMonths(date, months) {
    const d = new Date(date);
    d.setMonth(d.getMonth() + months);
    return d;
  }

  const todayDate = new Date(today);

  const termMap = {};
  for (const term of terms) {
    const [type, duration] = term.split(' ');
    termMap[type] = parseInt(duration);
  }

  const result = [];

  privacies.forEach((privacy, index) => {
    const [date, termType] = privacy.split(' ');
    const startDate = new Date(date);
    const expirationDate = addMonths(startDate, termMap[termType]);
    expirationDate.setDate(expirationDate.getDate() - 1);

    if (expirationDate < todayDate) {
      result.push(index + 1);
    }
  });

  return result;
}

console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"])); // [1, 3]
console.log(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"])); // [1, 4, 5]