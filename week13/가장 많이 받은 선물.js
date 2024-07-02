function solution(friends, gifts) {
  const Given = {};
  const Received = {};
  const giftPoints = {};
  const nextMonthGifts = {};

  // 데이터 구조 초기화
  friends.forEach(friend => {
      Given[friend] = 0;
      Received[friend] = 0;
      giftPoints[friend] = 0;
      nextMonthGifts[friend] = 0;
  });

  // 주고받은 선물 개수 카운트
  gifts.forEach(gift => {
      const [giver, receiver] = gift.split(' ');
      Given[giver]++;
      Received[receiver]++;
  });

  console.log('Given:', Given);
  console.log('Received:', Received);

  // 각 사람의 선물 지수 계산
  friends.forEach(friend => {
      giftPoints[friend] = Given[friend] - Received[friend];
  });

  console.log('giftPoints:', giftPoints);

  // 다음 달에 누가 누구에게 선물을 줄지 결정
  friends.forEach((friend1, index) => {
    friends.slice(index + 1).forEach(friend2 => {
        const From1To2 = gifts.filter(gift => gift === `${friend1} ${friend2}`).length;
        const From2To1 = gifts.filter(gift => gift === `${friend2} ${friend1}`).length;

        if (From1To2 > From2To1) {
            nextMonthGifts[friend1]++;
        } else if (From1To2 < From2To1) {
            nextMonthGifts[friend2]++;
        } else {
            if (giftPoints[friend1] > giftPoints[friend2]) {
                nextMonthGifts[friend1]++;
            } else if (giftPoints[friend1] < giftPoints[friend2]) {
                nextMonthGifts[friend2]++;
            }
        }
    });
  });

  console.log('nextMonthGifts:', nextMonthGifts);

  //가장 많은 선물을 받는 친구가 받을 선물의 수 찾기
  let maxGifts = 0;
  friends.forEach(friend => {
      if (nextMonthGifts[friend] > maxGifts) {
          maxGifts = nextMonthGifts[friend];
      }
  });

  return maxGifts;
}

function solution(friends, gifts) {
    const Given = {};
    const Received = {};
    const giftPoints = {};
    const nextMonthGifts = {};

    friends.forEach(friend => {
        Given[friend] = 0;
        Received[friend] = 0;
        giftPoints[friend] = 0;
        nextMonthGifts[friend] = 0;
    });

    gifts.forEach(gift => {
        const [giver, receiver] = gift.split(' ');
        Given[giver]++;
        Received[receiver]++;
    });

    console.log('Given:', Given);
    console.log('Received:', Received);

    friends.forEach(friend => {
        giftPoints[friend] = Given[friend] - Received[friend];
    });

    console.log('giftPoints:', giftPoints);

    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const friend1 = friends[i];
            const friend2 = friends[j];
            const From1To2 = gifts.filter(gift => gift === `${friend1} ${friend2}`).length;
            const From2To1 = gifts.filter(gift => gift === `${friend2} ${friend1}`).length;

            if (From1To2 > From2To1) {
                nextMonthGifts[friend1]++;
            } else if (From1To2 < From2To1) {
                nextMonthGifts[friend2]++;
            } else {
                if (giftPoints[friend1] > giftPoints[friend2]) {
                    nextMonthGifts[friend1]++;
                } else if (giftPoints[friend1] < giftPoints[friend2]) {
                    nextMonthGifts[friend2]++;
                }
            }
        }
    }

    console.log('nextMonthGifts:', nextMonthGifts);

    let maxGifts = 0;
    friends.forEach(friend => {
        if (nextMonthGifts[friend] > maxGifts) {
            maxGifts = nextMonthGifts[friend];
        }
    });

    return maxGifts;
}

console.log(solution(["muzi", "ryan", "frodo", "neo"], ["muzi frodo", "muzi frodo", "ryan muzi", "ryan muzi", "ryan muzi", "frodo muzi", "frodo ryan", "neo muzi"])); // Output: 2
console.log(solution(["joy", "brad", "alessandro", "conan", "david"], ["alessandro brad", "alessandro joy", "alessandro conan", "david alessandro", "alessandro david"])); // Output: 4
console.log(solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"])); // Output: 0
