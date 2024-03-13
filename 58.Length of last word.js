var lengthOfLastWord = function (s) {
  var arr = s.split(" ");
  const final=[];
  arr.forEach((element, index) => {
    if (element !== '') {
      final.push(element)
    }
  });
  console.log(final);
  var lastWordLength = final[final.length - 1].length;
  return lastWordLength;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
