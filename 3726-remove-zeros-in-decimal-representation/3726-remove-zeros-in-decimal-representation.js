/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    return Number(String(n).split('').filter(i=>Number(i)!==0).map(i=>Number(i)).join(''))
};