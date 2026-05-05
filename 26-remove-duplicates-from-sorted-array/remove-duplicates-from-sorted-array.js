/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let a=0,b=0;
  while(b<nums.length){
      if(nums[a]!==nums[b]){
          a++;
          nums[a]=nums[b];
      }
      b++;
  }
  return a+1;
};