/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum=0;
    let total=nums.reduce((a,b)=>a+b,0);
    let rightSum=total;
    for(let i=0;i<nums.length;i++){
        rightSum=total-leftSum-nums[i];
        if(leftSum===rightSum) return i;
        leftSum+=nums[i];
    }
    return -1;
};