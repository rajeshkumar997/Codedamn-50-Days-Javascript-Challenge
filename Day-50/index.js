function getMiddle(s) {
  // your code here
  let length = s.length;
  let mid = Math.floor(length/2);
  if (length % 2 === 0) {
    return s.slice(mid - 1, mid + 1);
  } else {
    return s.charAt(mid);
  }
}
