function solution(scoville, K) {
  let mixCount = 0;

  // 최소 힙을 사용하기 위해 배열을 힙으로 변환
  const heap = new MinHeap();
  scoville.forEach(num => heap.push(num));

  // 가장 작은 스코빌 지수가 K 이상이 될 때까지 섞기
  while (heap.peek() < K) {
      if (heap.size() < 2) {
          return -1; // 섞을 수 있는 음식이 부족할 경우 -1 반환
      }

      // 두 개의 가장 작은 음식 섞기
      const first = heap.pop();
      const second = heap.pop();
      const newScoville = first + second * 2;
      heap.push(newScoville);
      mixCount++; // 섞은 횟수 증가
  }

  return mixCount; // 모든 음식이 K 이상이 되었을 때 섞은 횟수 반환
}

// 최소 힙 구현
class MinHeap {
  constructor() {
      this.heap = [];
  }

  push(value) {
      this.heap.push(value);
      this.bubbleUp();
  }

  pop() {
      if (this.size() === 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.bubbleDown();
      return min;
  }

  peek() {
      return this.heap[0];
  }

  size() {
      return this.heap.length;
  }

  bubbleUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
          let parentIndex = Math.floor((index - 1) / 2);
          if (this.heap[parentIndex] <= this.heap[index]) break;
          [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
          index = parentIndex;
      }
  }

  bubbleDown() {
      let index = 0;
      const length = this.heap.length;
      while (true) {
          let leftIndex = 2 * index + 1;
          let rightIndex = 2 * index + 2;
          let smallest = index;

          if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) {
              smallest = leftIndex;
          }

          if (rightIndex < length && this.heap[rightIndex] < this.heap[smallest]) {
              smallest = rightIndex;
          }

          if (smallest === index) break;

          [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
          index = smallest;
      }
  }
}

// TC = O(n log n)

// function solution(scoville, K) {
//   let mixCount = 0;

//   // 배열을 오름차순으로 정렬하여 가장 작은 값이 앞에 오도록 함
//   scoville.sort((a, b) => a - b);

//   // 가장 작은 스코빌 지수가 K 이상이 될 때까지 반복
//   while (scoville[0] < K) {
//       // 배열에 2개 이상의 요소가 없으면 섞을 수 없으므로 -1을 반환
//       if (scoville.length < 2) return -1;

//       // 가장 작은 두 스코빌 지수를 섞어서 새로운 스코빌 지수를 계산
//       const newScoville = scoville[0] + (scoville[1] * 2);

//       // 배열의 첫 번째와 두 번째 요소를 제거
//       scoville.splice(0, 2);

//       // 새로 만든 스코빌 지수를 배열에 추가하고 다시 정렬
//       scoville.push(newScoville);
//       scoville.sort((a, b) => a - b);

//       mixCount++; // 섞은 횟수를 증가
//   }

//   return mixCount;  // 모든 음식의 스코빌 지수가 K 이상이 되면 섞은 횟수 반환
// }

// // TC = O(n^2 log n)

// 첫 번째 해결법 (MinHeap 사용):
// 시간 복잡도: O(n log n)
// 힙에 값을 넣고 빼는 작업은 각각 O(log n)이 걸리며, 이를 여러 번 반복하므로 전체 복잡도는 O(n log n)입니다.
// 가장 작은 두 값을 효율적으로 추출하고 다시 힙에 넣기 때문에 매우 효율적입니다.
// 두 번째 해결법 (정렬 사용):
// 시간 복잡도: O(n^2 log n)
// 매번 배열을 정렬하는데 O(n log n) 시간이 걸리고, 이를 여러 번 반복하면 전체 복잡도는 O(n^2 log n)이 됩니다.
// 첫 번째 해결법이 더 효율적인 이유:
// 첫 번째 방법은 힙을 사용해 필요한 두 값만 빠르게 처리하는 반면, 두 번째 방법은 매번 배열을 전체 정렬하므로 불필요한 연산이 많아 비효율적입니다.