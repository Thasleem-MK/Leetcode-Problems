var isPalindrome = function (x) {
  var numberStr = x.toString();
  var numberStrrRev=numberStr.split("").reverse().join("");
  if (x >= 0 && numberStr === numberStrrRev) {
    return true;
  } else return false;
};
console.log(isPalindrome(121));
