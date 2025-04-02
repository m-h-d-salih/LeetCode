/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if(nums.length===2 || nums.length===1 || nums.length===0){
        return -1;
    }
    return nums.sort((a,b)=>a-b)[1]
};