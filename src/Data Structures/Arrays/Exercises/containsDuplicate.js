/* 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let container = [];

    let i = 0;
    do {
        container.push(nums[i]);
        if (container.includes(nums[i + 1])) return true;
        i++;
    } while (i < nums.length);
    return false;
};
