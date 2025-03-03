/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            nums[i]=nums[i]*2;
            nums[i+1]=0
        }
    }
    const zeros=nums.filter(item=>item===0);
    const nonzeros=nums.filter(item=>item!==0);
    return [...nonzeros,...zeros];
};