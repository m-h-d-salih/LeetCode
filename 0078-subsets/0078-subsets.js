/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    return nums.reduce((subset,value)=>subset.concat(subset.map(set=>[value,...set])),[[]]);
};