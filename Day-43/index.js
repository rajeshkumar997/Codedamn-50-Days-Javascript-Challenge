function high(x) {
  //code your magic here
  const words = x.split(' ');
  let maxScore = 0;
  let maxWord = '';
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let score = 0;
    for (let j = 0; j < word.length; j++) {
      const letterScore = word.charCodeAt(j) - 96;
      score += letterScore;
    }
    if (score > maxScore) {
      maxScore = score;
      maxWord = word;
    }
  }
  return maxWord;
}
