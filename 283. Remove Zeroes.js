var moveZeroes = function (nums) {
    let length = nums.length;
    //Loop through the array: The program iterates through each element of the array.
    for (let i = 0; i < length; i++) {
        //Check for zero: At each iteration, it checks if the current element is zero.
        if (nums[i] == 0) {
            //Move zero to the end: If the current element is zero, it removes it from its current position using splice(i, 1) and then appends a zero to the end of the array using nums.push(0). This effectively moves the zero to the end of the array.
            nums.splice(i, 1);
            nums.push(0);
            i--;
            length--;
        }
    }
};
console.log(moveZeroes([1,2,3,0,40,0,4]));