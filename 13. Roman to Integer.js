function toInt(letter) {
  switch (letter) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
  }
}
var romanToInt = function (s) {
  var arr = s.split("");
  var numebr = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    // console.log(toInt(arr[i]) >= toInt(arr[i + 1]));
    if (toInt(arr[i]) >= toInt(arr[i + 1])) {
      numebr += toInt(arr[i]);
    } else {
      numebr -= toInt(arr[i]);
    }
  }
  return numebr + toInt(arr[arr.length - 1]);
};
console.log(romanToInt("LVIII"));
