/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
const array =[...new Set(nums)].sort((a,b)=>b-a);
if(array.length<3) return array[0];
return array[2];
};