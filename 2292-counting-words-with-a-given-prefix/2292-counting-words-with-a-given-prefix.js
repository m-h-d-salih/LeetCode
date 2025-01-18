/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count=0;
    words.forEach(item=>{
        if(item.startsWith(pref)){
            count++;
        }
    })
    return count;
};