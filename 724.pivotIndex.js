var pivotIndex = function (nums) {
    let totalValue = nums.reduce((acc, crr) => acc + crr, 0);
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        let right = totalValue - left - nums[i];
        if (left === right) {
            return i;
        }
        left += nums[i];
    }
    return -1;
};
let nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));