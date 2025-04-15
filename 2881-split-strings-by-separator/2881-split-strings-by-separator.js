/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    return words.map(i=>i.split(separator)).flat().filter(i=> i!=='');
};