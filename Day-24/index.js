function expandedForm(num) {
  // Your code here
  const digits = String(num).split('');
  const expanded = [];
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== '0') {
      const value = digits[i] * Math.pow(10, digits.length - i - 1);
      expanded.push(value);
    }
  }
  return expanded.join('+');
  
}
