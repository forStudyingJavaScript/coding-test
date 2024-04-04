function solution(my_string) {
  let res = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === my_string[i].toLowerCase()) {
      res += my_string[i].toUpperCase();
    } else {
      res += my_string[i].toLowerCase();
    }
  }
  return res;
}
