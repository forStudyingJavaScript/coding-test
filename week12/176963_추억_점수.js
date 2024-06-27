function solution(name, yearning, photo) {
    const memory = Object.fromEntries(name.map((n, i) => [n, yearning[i]]));
  
    return photo.map(arr =>
      arr.reduce((acc, cur) => acc + (memory[cur] || 0), 0)
    );
  }
  