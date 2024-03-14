var DetectCapitalUse = function (word) {
  if (
    word === word.toUpperCase() ||
    word === word.toLowerCase() ||
    /^[A-Z][a-z]*$/.test(word)
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(`Result: ${DetectCapitalUse(prompt("Enter the sentence:"))}`);
