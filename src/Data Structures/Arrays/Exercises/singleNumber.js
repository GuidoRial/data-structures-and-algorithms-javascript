/* 
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Input: nums = [2,2,1]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let freqCount = {}; //storage, anything that's already here will be deleted

    for (let char of nums) {
        if (freqCount[char] === undefined) {
            //if it's not there, add it
            freqCount[char] = 1;
        } else {
            // if it's there, delete it
            delete freqCount[char];
        }
    }

    return Object.keys(freqCount)[0]; //Print the only unique element left inside the Object.

    /*
    most efficient solution:
    let n = 0;
    for (num of nums) {
        n ^=num;
    }
    return n;
    */
};
