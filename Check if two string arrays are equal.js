var arrayStringsAreEqual = function (word1, word2) {
  if (word1.join("") === word2.join("")) {
    return true;
  } else {
    return false;
  }
};
var word1 = prompt("Enter the 1st String:");
var word2 = prompt("Enter the 2nd String:");
console.log(arrayStringsAreEqual(word1, word2));
