/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result="";
    let i=0;
    let trackS=strs[0];
    while(i< trackS.length){
        for(let s of strs.slice(1)){
           if(trackS[i]!==s[i]){
               return result;
           }
        }
        result+=trackS[i]
        i++;
    }
    return result;
};