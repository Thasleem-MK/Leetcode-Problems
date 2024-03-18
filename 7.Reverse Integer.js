var reverse = function (x) {
  var min = Math.pow(-2, 31);
  var max = Math.pow(2, 31) - 1
  var Num;
  var Str = Math.abs(x).toString().split("").reverse().join("");
  if (x < 0) {
      Num = -1 * Number(Str);
  } else {
      Num = 1 * Number(Str);
  }
  if (Num > min && Num < max) {
      return Num;
  } else
      return 0;
};
console.log(reverse(23432345));
