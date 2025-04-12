/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    const sorted=nums.sort((a,b)=>b-a);
    if (sorted.length === 0) return -1;
    if(sorted.includes(-sorted[0]))
    return sorted[0];
    return findMaxK(sorted.slice(1))
};