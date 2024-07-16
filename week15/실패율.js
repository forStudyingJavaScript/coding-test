const solution = (N, stages) => {
  const counts = new Array(N + 2).fill(0);
  stages.forEach(stage => {
      counts[stage]++;
  });

  let totalPlayers = stages.length;
  let failureRates = [];

  for (let i = 1; i <= N; i++) {
      let playersAtStage = counts[i];
      if (totalPlayers === 0) {
          failureRates.push({ stage: i, rate: 0 });
      } else {
          let rate = playersAtStage / totalPlayers;
          failureRates.push({ stage: i, rate: rate });
          totalPlayers -= playersAtStage;
      }
  }

  failureRates.sort((a, b) => b.rate - a.rate || a.stage - b.stage);

  return failureRates.map(item => item.stage);
};