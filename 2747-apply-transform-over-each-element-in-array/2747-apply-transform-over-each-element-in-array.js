/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newar=[]
    for(let i=0;i<arr.length;i++)
    newar.push(fn(arr[i],i))
    return newar
};