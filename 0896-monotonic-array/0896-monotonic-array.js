/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  let up=0,down=0,i=1;
  while(i<nums.length){
      if(nums[i]>nums[i-1]) up++;
      else if(nums[i]<nums[i-1]) down++;
      else {
          down++;
          up++;
      }
      i++
  }
  return up===nums.length-1 || down===nums.length-1?true:false
};