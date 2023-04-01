const valid = (string) => {
	// code here

  // Remove any spaces from the string
  string = string.replace(/\s/g, '');

  // Check that the string contains only digits
  if (!/^\d+$/.test(string)) {
    return false;
  }
  // Double every second digit, starting from the right
  let sum = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    let digit = parseInt(string.charAt(i));
    if ((string.length - i) % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
    // Check if the sum is divisible by 10
    return sum % 10 === 0;
}
