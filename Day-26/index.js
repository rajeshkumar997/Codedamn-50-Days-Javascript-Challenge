function findOdd(arr) {
  //happy coding!
  const occurance  = {};
  for(let num of arr){
    if(num in occurance){
        occurance[num]++;
    }
    else{
        occurance[num] = 1;
    }
  }
  for(let num in occurance){
    if(occurance[num] % 2 !== 0){
        return parseInt(num);
    }
  }
}
