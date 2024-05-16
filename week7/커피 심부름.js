function solution(order) {
  return order.reduce((acc, current) => acc + (current.includes('cafelatte') ? 5000 : 4500), 0);
}

console.log(solution(['cafelatte', 'americanoice', 'hotcafelatte', 'anything'])); //19000
console.log(solution(['americanoice', 'americano', 'iceamericano'])); //13500