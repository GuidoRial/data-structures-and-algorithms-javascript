const bubbleSort = (nums) => {
    if (!Array.isArray(nums)) return -1; //If it's not an array

    if (nums.length < 2) return nums; // If array length is 1 or less

    let swapped = false;
    let temp = 0;
    let count = -1;
    let arrLength = 0;

    do {
        count++;
        swapped = false;
        arrLength = nums.length - 1 - count; // Not loop through sorted items

        for (let i = 0; i < arrLength.length; i++) {
            if (nums[i] > nums[i + 1]) {
                temp = nums[i + 1];
                nums[i + 1] = nums[i];
                nums[i] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return nums;
};
