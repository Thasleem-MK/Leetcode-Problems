var findMedianSortedArrays = function (nums1, nums2) {
    const newArr = [...nums1, ...nums2];
    const sortedArr = newArr.sort((a, b) => a - b);
    console.log(sortedArr)
    if(sortedArr.length%2==0)
    {
        var mid=sortedArr.length/2;
        return (sortedArr[mid]+sortedArr[mid-1])/2;
    }
    else
    {
        var mid=(sortedArr.length-1)/2
        return sortedArr[mid];
    }
};
console.log(findMedianSortedArrays([1,2],[3,4]));