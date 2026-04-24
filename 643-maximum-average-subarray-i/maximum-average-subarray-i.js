/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left=0;
    let sum=-Infinity;
    let trackSum=0;
    for(let i=0;i<nums.length;i++){
        trackSum+=nums[i]
        if((i-left+1)===k){
            sum=trackSum>sum?trackSum:sum;
            trackSum-=nums[left];
            left++;
        }
    }
    return sum/k;
};