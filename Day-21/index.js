const unionOfArrays = (arr1, arr2) => {
  // code below here

//   // Combine the two arrays into a new array
//   const combinedArray = [...arr1, ...arr2];

//     // Create a new Set object from the combined array to remove duplicates
//   const set = new Set(combinedArray);

//   // Convert the set back to an array and return it
//   return Array.from(set);

     ///////// or /////////
    const result = [...arr1];
    arr2.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
};

console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);
