/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const left = [];
    const middle = [];
    const right = [];
    
    for (let i of nums) {
        if (i < pivot) {
            left.push(i);
        } else if (i > pivot) {
            right.push(i);
        } else {
            middle.push(i); 
        }
    }
    
    return [...left, ...middle, ...right];
};