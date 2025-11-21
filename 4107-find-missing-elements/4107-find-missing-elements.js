/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    const sorted=nums.sort((a,b)=>a-b);
    let result=[];
    for(let i=sorted[0];i<=sorted[sorted.length-1];i++){
        if(!sorted.includes(i)){
        result.push(i);
        }
    }
    return result;
};