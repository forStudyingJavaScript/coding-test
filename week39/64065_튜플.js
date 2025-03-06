function solution(s) {
    let sets = s.slice(2, -2).split("},{").map(str => str.split(",").map(Number));
    sets.sort((a, b) => a.length - b.length);
    
    let result = [];
    let seen = Object.create(null); // 객체를 사용한 Set 대체

    for (let arr of sets) {
        for (let num of arr) {
            if (!seen[num]) {
                result.push(num);
                seen[num] = true;
            }
        }
    }

    return result;
}