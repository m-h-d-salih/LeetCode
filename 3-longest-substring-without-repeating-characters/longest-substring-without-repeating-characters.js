/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set=new Set();
    let i=0,left=0,maxLength=0;
    while(i<s.length){
        while(set.has(s[i])){
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        i++;
        maxLength=i-left>maxLength?i-left:maxLength;
    }
    return maxLength;
};