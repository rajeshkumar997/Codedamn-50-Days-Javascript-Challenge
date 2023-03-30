function wave(str) {
  // Your Code goes below
  let res = [];
  for(let i=0; i<str.length; i++){
    if(str[i] !== ' '){
        res.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1));
    }
  }
  return res;
}

console.log(wave("hello"));
