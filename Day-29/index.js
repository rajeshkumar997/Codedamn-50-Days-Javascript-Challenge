function accum(s) {
  // your code goes below
  let res = '';
  for(let i=0; i<s.length; i++){
    if(i>0){
        res += '-';
    }
    res += s[i].toUpperCase()+ s[i].toLowerCase().repeat(i);
  }
  return res;
}
