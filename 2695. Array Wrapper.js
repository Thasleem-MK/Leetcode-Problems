/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }
    valueOf() {
        const flattenedNums = this.nums.flat();
        return flattenedNums.reduce((acc, crr) => acc + crr, 0);
    }
    toString() {
        return '[' + this.nums.map(subArray => `[${subArray.join(',')}]`).join(',') + ']';
    }
}

const wrapper = new ArrayWrapper([[1, 10], [3, 4]]);
console.log(wrapper.valueOf());
