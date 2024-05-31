var removeDuplicates = function (nums) {
    let length = nums.length;
    if (length <= 2) { return };
    let i = 2;
    for (let j = 2; j < length; j++) {
        if (nums[j] != nums[i - 2]) {
            nums[i] = nums[j];
            i++
        }
    }
    nums.length = i;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));