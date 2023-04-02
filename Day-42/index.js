function sumTwoSmallestNumbers(numbers) {
  //Code below
    numbers.sort((a,b) => {
        return a-b;
    })
    var sum = numbers[0] + numbers[1];
    return sum;
}
