const solution = (N, stages) => {
    // Create an array to count the number of players at each stage
    const counts = new Array(N + 2).fill(0);
    stages.forEach(stage => {
        counts[stage]++;
    });

    let totalPlayers = stages.length;  // Total number of players
    let failureRates = [];

    // Calculate the failure rate for each stage
    for (let i = 1; i <= N; i++) {
        let playersAtStage = counts[i];
        if (totalPlayers === 0) {
            failureRates.push({ stage: i, rate: 0 });
        } else {
            let rate = playersAtStage / totalPlayers;
            failureRates.push({ stage: i, rate: rate });
            totalPlayers -= playersAtStage;  // Subtract the number of players who are at the current stage
        }
    }

    // Sort stages by failure rate in descending order. If two stages have the same rate, the lower stage number comes first.
    failureRates.sort((a, b) => b.rate - a.rate || a.stage - b.stage);

    // Map the sorted array to get just the stage numbers
    return failureRates.map(item => item.stage);
};
// TC = O(n); SC = O(n); 

// const solution = (N, stages) => {
//   let result = [];
//   for(let i = 1; i <= N; i++) {
//       let reach = stages.filter(x => x >= i).length;
//       let curr = stages.filter(x => x === i).length;
//       result.push([i, curr / reach]);
//   }

//   result.sort((a, b) => b[1] - a[1]);
//   return result.map(x => x[0]);
// };

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4, 1, 2, 3]
