/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    const sorted=nums.sort((a,b)=>a-b);
    let result=(sorted[0]*sorted[1])-(sorted[nums.length-2]*sorted[nums.length-1])
    return Math.abs(result);
};