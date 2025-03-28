/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    const arr=s.split('');
    return new Set(arr).size;
};