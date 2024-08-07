function solution(bandage, maxHealth, attacks) {
  const [healingDuration, healingPerSec, bonusHealing] = bandage;
  let currentHealth = maxHealth;
  let currentTime = 0;

  for (const [attackTime, damage] of attacks) {
      const healingTime = attackTime - currentTime - 1;

      // 공격 사이의 체력 회복 계산
      if (healingTime > 0) {
          const totalHealing = healingTime * healingPerSec;
          const bonus = Math.floor(healingTime / healingDuration) * bonusHealing;
          currentHealth = Math.min(currentHealth + totalHealing + bonus, maxHealth);
      }

      // 공격으로 인한 체력 감소
      currentHealth -= damage;

      // 체력이 0 이하로 떨어지면 사망 처리
      if (currentHealth <= 0) {
          return -1;
      }

      // 현재 시간을 공격 시간으로 업데이트
      currentTime = attackTime;
  }

  // 모든 공격이 끝난 후 남은 체력 반환
  return currentHealth;
}

console.log(solution([5, 1, 5], 30, [[2, 10], [9, 15], [10, 5], [11, 5]])); // 5
console.log(solution([3, 2, 7], 20, [[1, 15], [5, 16], [8, 6]])); // -1
console.log(solution([4, 2, 7], 20, [[1, 15], [5, 16], [8, 6]])); // -1
console.log(solution([1, 1, 1], 5, [[1, 2], [3, 2]])); // 3
