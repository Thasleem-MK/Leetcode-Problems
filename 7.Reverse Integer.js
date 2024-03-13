var reverse = function (x) {
  var flimit = Math.pow(2, 31) - 1;
  var llimit = Math.pow(-2, 31);
  if (x < 0) {
    var value = Number(Math.abs(x).toString().split("").reverse().join(""));
    console.log(value);
    if (flimit - value > 0 && value) {
      return value * -1;
    }
  } else {
    var value = Number(x.toString().split("").reverse().join(""));
    console.log(value);
    if (value < limit && value > Math(-2, 31)) {
      return value;
    }
  }
};
console.log(reverse(1534236469));
