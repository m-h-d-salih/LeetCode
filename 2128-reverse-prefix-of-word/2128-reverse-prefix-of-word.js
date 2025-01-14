/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let index=word.indexOf(ch)
   const first=word.slice(0,index+1).split(``).reverse().join('')
   return first+word.slice(index+1)
};