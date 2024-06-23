function solution(survey, choices) {
    const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    
    survey.forEach((pair, index) => {
      const [left, right] = pair;
      types[choices[index] < 4 ? left : right] += Math.abs(choices[index] - 4);
    });
  
    return ['RT', 'CF', 'JM', 'AN'].map(pair => 
      types[pair[0]] >= types[pair[1]] ? pair[0] : pair[1]
    ).join('');
  }

