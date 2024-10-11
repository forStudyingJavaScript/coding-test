function solution(files) {
  return files.sort((a, b) => {
      //HEAD, NUMBER 추출을 위한 정규식
      const regExp = /^([a-zA-Z-. ]+)(\d{1,5})/;
      
      //파일 A와 B에서 HEAD와 NUMBER를 추출
      const matchA = a.match(regExp);
      const matchB = b.match(regExp);
      
      const headA = matchA[1].toLowerCase();  //HEAD 부분 소문자로 변환
      const headB = matchB[1].toLowerCase();
      
      const numberA = parseInt(matchA[2], 10);  //NUMBER 부분 정수로 변환
      const numberB = parseInt(matchB[2], 10);

      //HEAD가 다르면 사전 순 정렬
      if (headA < headB) return -1;
      if (headA > headB) return 1;

      //HEAD가 같으면 NUMBER 숫자 순 정렬
      if (numberA < numberB) return -1;
      if (numberA > numberB) return 1;

      //HEAD와 NUMBER가 같으면 원래 순서 유지
      return 0;
  });
}

console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
//["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]));
//["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
