function toWeirdCase(string) {
  // Your code goes here
  string = string.toLowerCase();
  const str = string.split("");
  let res = '';
  for(let i=0; i<str.length; i++){
    if(i%2 === 0){
        res += str[i].toUpperCase();
    }
    else{
        res += str[i]
    }
  }
  return res;
}

console.log(
  `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
);
