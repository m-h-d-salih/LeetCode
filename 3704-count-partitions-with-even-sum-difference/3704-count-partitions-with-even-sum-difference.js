/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let result=0;
    const arr=[];
    while(true){
        arr.push(nums[0]);
        nums.shift();
          if(nums.length===0){
            break;
        }
        let sumNum=nums.reduce((acc,item)=>acc+item);
        let sumArr=arr.reduce((acc,item)=>acc+item);
        if((sumArr-sumNum)%2===0){
            result++;
        }
        
    }
    return result;
};