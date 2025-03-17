/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const unique=nums.filter(i=>nums.indexOf(i)===nums.lastIndexOf(i));
    return unique.reduce((a,b)=>a+b,0);
};