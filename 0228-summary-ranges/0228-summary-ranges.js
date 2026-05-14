/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let left=0,right=0;
    const result=[];
    while(right<nums.length){
        if(nums[right]+1===nums[right+1]){
            right++;
        }else{
            if(nums[left]===nums[right]) result.push(`${nums[left]}`);
            else result.push(nums[left]+"->"+nums[right]);
            left=right+1;
            right++;
        }
    }
    return result;
};