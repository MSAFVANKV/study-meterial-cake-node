function insertDashAfterNthLetter(inputString, n) {
  if (typeof inputString !== 'string') {
    console.error('Invalid input. Please provide a valid string.');
    return;
  }

  if (typeof n !== 'number' || isNaN(n) || n < 0) {
    console.error('Invalid value for n. Please provide a non-negative number.');
    return;
  }

  if (n > inputString.length) {
    console.error('Invalid value for n. It should be less than or equal to the length of the input.');
    return;
  }

  let result = '';
  for (let index = 0; index < inputString.length; index++) {
    if (index === n) {
      result += '-' + inputString[index];
    } else {
      result += inputString[index];
    }
  }

  console.log(result);
}

insertDashAfterNthLetter('mynameis', 5); // Output: my-nameis

// more simplified below


// ===================================
function insertDashAfterNthLetter(inputString, n) {
  if (typeof inputString !== 'string') {
    console.error('Invalid input. Please provide a valid string.');
    return;
  }

  if (typeof n !== 'number' || isNaN(n) || n < 0 || n >= inputString.length) {
    console.error('Invalid value for n. It should be a non-negative number less than the length of the input.');
    return;
  }

  const result = inputString.slice(0, n) + '-' + inputString.slice(n);
  console.log(result);
}

// Example usage:
insertDashAfterNthLetter('mynameis', 5); // Output: my-nam-eis
