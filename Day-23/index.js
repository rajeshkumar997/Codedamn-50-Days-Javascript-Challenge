function findEvenIndex(arr) {
  //Code goes here!
  let leftSum =0;
  let rightSum = arr.reduce((acc, val) => acc+val, 0);
  for(let i=0; i<arr.length; i++){
    if(leftSum === rightSum - arr[i]){
        return i;
    }
    leftSum += arr[i];
    rightSum -= arr[i];
  }
  return -1;
}
