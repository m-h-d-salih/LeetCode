/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    const arr1=nums1.sort((a,b)=>a-b);
    const arr2=nums2.sort((a,b)=>a-b);
    let result=0;
    for(let i=0;i<nums1.length;i++){
        result=arr2[i]-arr1[i]
    }
    return result;
};