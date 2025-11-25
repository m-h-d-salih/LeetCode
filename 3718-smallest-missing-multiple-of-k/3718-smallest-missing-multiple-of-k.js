/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let i=k;
    let result;
    while(true){
        if(!nums.includes(i)){
            result=i;
            break;
        }
        i+=k
    }
    return result;
};