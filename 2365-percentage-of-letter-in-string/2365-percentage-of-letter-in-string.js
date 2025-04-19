/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count=0;
    for(let i of s){
        if(i===letter){
            count++;
        }
    }
    return Math.trunc((count/s.length)*100);
};