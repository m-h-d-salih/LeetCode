/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    return nums.sort((a,b)=>a-b)
    .map((item,index)=>item===target?index:-1)
    .filter(item=>item!==-1)
};