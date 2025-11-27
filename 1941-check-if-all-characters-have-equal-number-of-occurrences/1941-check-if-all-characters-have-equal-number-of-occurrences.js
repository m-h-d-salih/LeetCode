/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const arr=s.split('');
    const count=arr.reduce((acc,item)=>{
        acc[item]=(acc[item] | 0)+1;
        return acc;
    },{});
    return new Set(Object.values(count)).size===1
};