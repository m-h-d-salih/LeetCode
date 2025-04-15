/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let first='';
    let second='';
    let third='';
    for(let i in firstWord){
        first+=(firstWord.charCodeAt(i)-97)
    }
    for(let i in secondWord){
        second+=(secondWord.charCodeAt(i)-97)
    }
    for(let i in targetWord){
        third+=(targetWord.charCodeAt(i)-97)
    }
    return parseInt(first)+parseInt(second)==parseInt(third);
};