function solution(str1, str2) {
  function createMultiset(str) {
    const multiset = [];
    const upperStr = str.toUpperCase();

    for (let i = 0; i < upperStr.length - 1; i++) {
      const pair = upperStr.slice(i, i + 2);
      if (pair.match(/[A-Z]{2}/)) {
          multiset.push(pair);
      }
    }
    return multiset;
  }

  function calculateIntersectionUnion(set1, set2) {
    const map1 = new Map();
    const map2 = new Map();
    
    set1.forEach(item => map1.set(item, (map1.get(item) || 0) + 1));
    set2.forEach(item => map2.set(item, (map2.get(item) || 0) + 1));

    let intersection = 0;
    let union = 0;

    const allItems = new Set([...map1.keys(), ...map2.keys()]);
    
    allItems.forEach(item => {
      const count1 = map1.get(item) || 0;
      const count2 = map2.get(item) || 0;
      intersection += Math.min(count1, count2);
      union += Math.max(count1, count2);
    });

    return { intersection, union };
  }

  const set1 = createMultiset(str1);
  const set2 = createMultiset(str2);
  const { intersection, union } = calculateIntersectionUnion(set1, set2);

  if (union === 0) {
    return 65536;
  }
  
  const similarity = (intersection / union) * 65536;
  return Math.floor(similarity);
}