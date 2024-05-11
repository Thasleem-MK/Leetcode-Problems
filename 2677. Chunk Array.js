/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let final = [];
    for (let i = 0; i < arr.length; i += size) {
        final.push(arr.slice(i, size + i));
    }
    return final;
};

console.log(chunk([1, 2, 3, 4, 5], 1));