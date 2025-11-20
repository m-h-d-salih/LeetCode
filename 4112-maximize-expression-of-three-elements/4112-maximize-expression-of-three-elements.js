/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function(nums) {
    nums.sort((a, b) => b - a); 
    return nums[0] + nums[1] - nums[nums.length - 1];
};