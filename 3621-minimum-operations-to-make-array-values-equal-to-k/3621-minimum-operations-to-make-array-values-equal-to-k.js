/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    for (let i of nums) {
        if (i < k) return -1;
    }
    const set = new Set();
    for (let i of nums) {
        if (i > k) {
            set.add(i);
        }
    }
    return set.size;
};