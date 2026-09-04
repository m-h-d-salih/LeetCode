/**
 * @param {number[]} nums
 * @return {number[]}
 */
  var findErrorNums = function(nums) {
   const map=new Map();
   const result=[];
   for(let i of nums){
    if(map.has(i))
     result.push(i)
     else
      map.set(i,1)
   }
   for(let i=1;i<=nums.length;i++){
    if(!map.has(i)) result.push(i)
   }
   return result;
  };
