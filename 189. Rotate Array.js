var rotate = function (nums, k) {
    k = k % nums.length;
    const rotatedPart = nums.splice(nums.length - k);
    nums.unshift(...rotatedPart);
    return nums;
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));