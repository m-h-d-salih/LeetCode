/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let diff=Math.sqrt(num);
    return parseInt(diff)===diff;
};