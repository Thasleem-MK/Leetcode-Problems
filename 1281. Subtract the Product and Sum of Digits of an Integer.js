var subtractProductAndSum = function (n) {
  var numberArray = n.toString().split("");
  var product = numberArray.reduce((acc, crr) => {
    return Number(acc) * Number(crr);
  });
  var sum = numberArray.reduce((acc, crr) => {
    return acc + Number(crr);
  }, 0);
  return product - sum;
};
console.log(subtractProductAndSum(123));
