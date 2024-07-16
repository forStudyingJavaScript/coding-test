function solution(board, moves) {
  let result = { basket: [], count: 0 };

  const dollsEachColumn = board[0].map((_, columnIndex) => 
      board.map(row => row[columnIndex]).filter(cell => cell !== 0).reverse()
  );

  result = moves.reduce((acc, move) => {
      let column = move - 1;

      if (dollsEachColumn[column].length > 0) {
          let doll = dollsEachColumn[column].pop();

          if (acc.basket.length > 0 && acc.basket[acc.basket.length - 1] === doll) {
              acc.basket.pop();
              acc.count += 2;
          } else {
              acc.basket.push(doll);
          }
      }

      return acc;
  }, result);

  return result.count;
}


function solution(board, moves) {
  let basket = [];
  let count = 0;

  for (let move of moves) {
      let column = move - 1;
      
      for (let i = 0; i < board.length; i++) {
          if (board[i][column] !== 0) {
              let doll = board[i][column];
              board[i][column] = 0;

              if (basket.length > 0 && basket[basket.length - 1] === doll) {
                  basket.pop();
                  count += 2;
              } else {
                  basket.push(doll);
              }
              break;
          }
      }
  }

  return count;
}

console.log(solution(
  [[0,0,0,0,0],
   [0,0,1,0,3],
   [0,2,5,0,1],
   [4,2,4,4,2],
   [3,5,1,3,1]], 
  [1,5,3,5,1,2,1,4]
)); //4

 