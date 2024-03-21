var countSegments = function (s) {
  var count = 0;
  if (s.length > 0) {
    s.split(" ").forEach((element) => {
      if (element !== "") {
        count++;
      }
    });
    return count;
  } else {
    return 0;
  }
};
console.log(countSegments(prompt("Enter the string: ")));