function solution(video_len, pos, op_start, op_end, commands) {
  // "mm:ss"를 초 단위로 변환하는 함수
  function toSeconds(time) {
      const [mm, ss] = time.split(':').map(Number);
      return mm * 60 + ss;
  }

  // 초 단위를 "mm:ss"로 변환하는 함수
  function toTimeString(seconds) {
      const mm = Math.floor(seconds / 60);
      const ss = seconds % 60;
      return `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
  }

  let videoLen = toSeconds(video_len);
  let currentPosition = toSeconds(pos);
  const openingStart = toSeconds(op_start);
  const openingEnd = toSeconds(op_end);

  // 명령어 처리
  for (let command of commands) {
      // 오프닝 구간에 있는 경우 오프닝 끝으로 이동
      if (openingStart <= currentPosition && currentPosition <= openingEnd) {
          currentPosition = openingEnd;
      }

      if (command === "prev") {
          currentPosition = Math.max(0, currentPosition - 10);
      } else if (command === "next") {
          currentPosition = Math.min(videoLen, currentPosition + 10);
      }

      // 명령 처리 후에도 오프닝 구간에 있는 경우 오프닝 끝으로 이동
      if (openingStart <= currentPosition && currentPosition <= openingEnd) {
          currentPosition = openingEnd;
      }
  }

  return toTimeString(currentPosition);
}

console.log(solution("34:33", "13:00", "00:55", "02:55", ["next", "prev"])); // "13:00"
console.log(solution("10:55", "00:05", "00:15", "06:55", ["prev", "next", "next"])); // "06:55"
console.log(solution("07:22", "04:05", "00:15", "04:07", ["next"])); // "04:17"
