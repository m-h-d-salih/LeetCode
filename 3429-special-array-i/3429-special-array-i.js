/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    for(let i=0;i<nums.length;i++){
        if((nums[i]+nums[i+1])%2===0)return false
    }
    return true;
};