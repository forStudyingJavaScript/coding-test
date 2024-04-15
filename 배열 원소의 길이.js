//const solution = strlist => strlist.map(e => e.length);//

const solution = (strlist) => {
  let res = [];
  for (let i = 0; i < strlist.length; i++) {
    res.push(strlist[i].length);
  }
  return res;
};
