/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    const arr=[];
    if(nums.length===1){
        return nums[0];
    }
    for(let i=0;i<nums.length;i++){
        
        if(i===nums.length-1){
            return triangularSum(arr)
        }
        let sum=(nums[i]+nums[i+1])%10;
        arr.push(sum);
    }
};