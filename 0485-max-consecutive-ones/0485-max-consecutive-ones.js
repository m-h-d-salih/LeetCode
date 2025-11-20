/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count=0,maxcount=0;
    nums.forEach(i=>{
        if(i===1){
        count++;
        maxcount=Math.max(maxcount,count)
        }
        else
            count=0;
    })
    return maxcount;
};