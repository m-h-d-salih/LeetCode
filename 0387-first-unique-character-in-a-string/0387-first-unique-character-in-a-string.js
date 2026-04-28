/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    return s.split('').findIndex(i=>s.indexOf(i)===s.lastIndexOf(i));
};