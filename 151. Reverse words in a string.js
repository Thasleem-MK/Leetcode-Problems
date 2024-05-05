var reverseWords = function (s) {
    let arr = s.trim().split(/\s+/).reverse().join(' ');
    return arr;
};
console.log(reverseWords("  Hello    World    "));