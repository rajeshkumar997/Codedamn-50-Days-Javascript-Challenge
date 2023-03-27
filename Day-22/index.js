let uniqueInOrder = (iterable) => {
  //your code here - remember iterable can be a string or an array
  if (typeof iterable === 'string') {
    iterable = iterable.split('');
  }
  
  return iterable.filter((element, index) => {
    return element !== iterable[index - 1];
  });
};
