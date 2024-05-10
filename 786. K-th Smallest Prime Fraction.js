var kthSmallestPrimeFraction = function (arr, k) {
    let arr1 = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            arr1.push([arr[i] / arr[j], arr[i], arr[j]]);
        }
    }
    arr1.sort((a, b) => a[0] - b[0]);
    return [arr1[k - 1][1], arr1[k - 1][2]];
};

console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3));