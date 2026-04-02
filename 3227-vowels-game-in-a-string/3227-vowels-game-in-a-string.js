/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    const vowels='aeiou';
    for (let i of vowels){
        if(s.includes(i))
        return true;
    }
    return false;
};