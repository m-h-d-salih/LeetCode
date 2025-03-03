/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const a=nums1.filter(i=>!nums2.includes(i));
    const b=nums2.filter(i=>!nums1.includes(i));
    const ans1=new Set(a)
    const ans2=new Set(b)
    return [ans1.size>0?Array.from(ans1):[],ans2.size>0?Array.from(ans2):[]];
};