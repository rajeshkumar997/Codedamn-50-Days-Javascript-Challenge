function getCount(str) {
  let vowelsCount = 0;
  // enter your magic here
  str = str.toLowerCase();
  const vowels = ['a','e','i','o','u'];
  for(let char of str){
    if(vowels.includes(char)){
        vowelsCount++;
    }
  }
  return vowelsCount;
}

console.log(getCount("abracadabra"));
