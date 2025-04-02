/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const arr=[...Array.from(new Set(nums1)),...Array.from(new Set(nums2)),...Array.from(new Set(nums3))];
    return Array.from(new Set(arr.filter(item=>arr.indexOf(item)!==arr.lastIndexOf(item))) );
};