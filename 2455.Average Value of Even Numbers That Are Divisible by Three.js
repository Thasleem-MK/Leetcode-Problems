var averageValue = function (nums) {
  var numbers = [];
  nums.forEach((element) => {
    if (element % 2 == 0 && element % 3 == 0) {
      numbers.push(element);
    }
  });
  if (numbers.length > 0) {
    var sum = numbers.reduce((acc, crr) => {
     return acc + crr;
    },0);
    return Math.floor(sum / numbers.length);
  }else
  return 0;
};
console.log(averageValue([1, 3, 6, 10, 12, 15]));
