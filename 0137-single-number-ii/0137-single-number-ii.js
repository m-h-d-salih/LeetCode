/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
return nums.find(item=>nums.indexOf(item)===nums.lastIndexOf(item))
};