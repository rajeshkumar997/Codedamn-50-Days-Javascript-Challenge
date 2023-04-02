function findOutlier(integers) {
  let oddCount = 0;
  let evenCount = 0;
  let outlier;
  
  // Count the number of odd and even integers
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenCount++;
      outlier = integers[i]; // Assume even outlier
    } else {
      oddCount++;
      outlier = integers[i]; // Assume odd outlier
    }
    
    // If we have already found the outlier, break out of the loop
    if (oddCount > 1 && evenCount === 1) {
      break;
    } else if (evenCount > 1 && oddCount === 1) {
      break;
    }
  }
  
  return outlier;
}
