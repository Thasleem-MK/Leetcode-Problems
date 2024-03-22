var removeDuplicates = function (nums) {
  var length = nums.length - 1;
  while (length > 0) {
    if (nums[length] == nums[length - 1]) {
      nums.splice(length, 1);
    }
    length--;
  }
  return nums.length;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
