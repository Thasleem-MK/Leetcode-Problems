var merge = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; j++, i++) {
    nums1[i] = nums2[j];
  }
  console.log(nums1.sort((a, b) => a - b));
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
