function solution(survey, choices) {

  const scoreMap = {
    R: 0, T: 0,
    C: 0, F: 0,
    J: 0, M: 0,
    A: 0, N: 0
  };

  const choicePoints = {
    1: 3, 
    2: 2, 
    3: 1, 
    4: 0, 
    5: 1, 
    6: 2, 
    7: 3
  };

  survey.forEach((typePair, i) => {
    const [disagreeType, agreeType] = typePair;
    const choice = choices[i];

    if (choice < 4) scoreMap[disagreeType] += choicePoints[choice];
    else if (choice > 4) scoreMap[agreeType] += choicePoints[choice];
  });

  const result = [
    scoreMap['R'] >= scoreMap['T'] ? 'R' : 'T',
    scoreMap['C'] >= scoreMap['F'] ? 'C' : 'F',
    scoreMap['J'] >= scoreMap['M'] ? 'J' : 'M',
    scoreMap['A'] >= scoreMap['N'] ? 'A' : 'N'
  ];

  return result.join('');
}

function solution(survey, choices) {

  const scoreMap = {
    R: 0, T: 0,
    C: 0, F: 0,
    J: 0, M: 0,
    A: 0, N: 0
  };

  const choicePoints = {
    1: 3, 
    2: 2, 
    3: 1, 
    4: 0, 
    5: 1, 
    6: 2, 
    7: 3
  };

  survey.forEach((typePair, i) => {
    const [disagreeType, agreeType] = typePair;
    const choice = choices[i];

    scoreMap[choice < 4 ? disagreeType : agreeType] += choicePoints[choice];
  });

  const result = [
    scoreMap['R'] >= scoreMap['T'] ? 'R' : 'T',
    scoreMap['C'] >= scoreMap['F'] ? 'C' : 'F',
    scoreMap['J'] >= scoreMap['M'] ? 'J' : 'M',
    scoreMap['A'] >= scoreMap['N'] ? 'A' : 'N'
  ];

  return result.join('');
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); //'TCMA'
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])); //'RCJA'