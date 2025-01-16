/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let avg=[]
    let sorted=nums.sort((a,b)=>a-b)
    let arr1=sorted.slice(0,nums.length/2)
    let arr2=sorted.slice(nums.length/2).reverse()
    for(let i=0;i<arr1.length;i++){

        avg.push((arr1[i]+arr2[i])/2)
    }
    return Math.min(...avg)
};