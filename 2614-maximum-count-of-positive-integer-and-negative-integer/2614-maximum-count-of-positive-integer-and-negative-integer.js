/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos=0;
    let neg=0;
    for(let i of nums){
        if(i<0){
            neg++;
        }else if(i>=1){
            pos++;
        }
    }
    return pos>neg?pos:neg;
};