/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const arr= s.split(' ').sort((a,b)=>a[a.length-1]-b[b.length-1])
    return arr.map(item=>item.replace(item[item.length-1],'')).join(' ')
};