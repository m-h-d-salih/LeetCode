/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const myset=new Set(allowed);
    let count=words.length;
    for(let i of words){
        for(let j of i){
            if(!myset.has(j)){
                count--;
                break;
            }
        }
    }
    return count;
};