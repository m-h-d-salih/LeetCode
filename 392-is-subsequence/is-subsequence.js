/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s===t) return true
    let trackS=0,i=0;
    while(i<t.length){
        if(s[trackS]===t[i])  trackS++;
        if(trackS===s.length)return true;
        i++
    }
    return false;
};