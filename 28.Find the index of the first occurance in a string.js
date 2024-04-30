let heystack = prompt("Enter the heystack")
let needle = prompt("Enter the needle")

var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};
console.log(strStr(heystack,needle));