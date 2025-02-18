/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
   return nums.filter(item=>nums.indexOf(item)===nums.lastIndexOf(item)) 
};
