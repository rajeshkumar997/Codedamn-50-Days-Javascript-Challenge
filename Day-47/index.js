function isIsogram(str) {
  // your code here
  str = str.toLowerCase();
  let seen = {};
  
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            return false;
        } else {
            seen[char] = true;
        }
    }
  return true;
}
