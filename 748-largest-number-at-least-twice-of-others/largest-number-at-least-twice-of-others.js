/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let largest=-Infinity,largestIndex=0,secondLargest=-Infinity;
    for(let i=0;i<nums.length;i++){
      if(nums[i]>largest){
          secondLargest=largest;
          largest=nums[i];
          largestIndex=i;
      }else if(nums[i]>secondLargest) secondLargest=nums[i]
    }
    return largest>=(secondLargest*2)?largestIndex:-1;
};