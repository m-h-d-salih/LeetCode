/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const result=arr.filter(item=>arr.indexOf(item)===arr.lastIndexOf(item))
    return result[k-1]?result[k-1]:"";
};