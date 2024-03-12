var Word = prompt("Enter the sentence");
var capitalizeTitle = function (title) {
  var arr = title.toLowerCase().split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > 2) {
      var Cap = arr[i].split("");
      Cap[0] = Cap[0].toUpperCase();
      arr[i] = Cap.join("");
    }
  }
  return arr.join(" ");
};
console.log(capitalizeTitle(Word));
