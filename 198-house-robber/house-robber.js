/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp=[];
    let i=1;
     dp[0]=nums[0]
    while(i<nums.length){
        if(i==1){
            dp[i]=Math.max(nums[0],nums[1]);
        }else{
            dp[i]=Math.max(nums[i]+dp[i-2],dp[i-1]);
        }
        i++;
    }
    return dp[dp.length-1];
};