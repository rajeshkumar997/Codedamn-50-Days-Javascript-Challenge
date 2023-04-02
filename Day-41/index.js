function openOrSenior(data) {
  // your code goes below
  return data.map(([age, handicap]) => {
    if(age >= 55 && handicap > 7){
        return "Senior";
    } else {
        return "Open";
    }
  })
}

let output = openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);

console.log(output);
