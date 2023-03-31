function mostFreq(arr) {
  const freq = {};
  let maxFreq = 0;
  let mostFreqItem = null;
  
  for (const item of arr) {
    if (!freq[item]) {
      freq[item] = 1;
    } else {
      freq[item]++;
    }
    
    if (freq[item] > maxFreq) {
      maxFreq = freq[item];
      mostFreqItem = item;
    }
  }
  
  return `${mostFreqItem} ${maxFreq}`;
}

const arr = [1, 2, 2, 4, 5, 6, 6];

console.log(mostFreq(arr));
