/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let start=0,end=start+1;
    const result=[];
    while(end<s.length){
        if(s[start]!==s[end]){
            if(end-start>=3)
            result.push([start,end-1]);
            start=end
        }
        end++;
    }
     if(end-start>=3)
            result.push([start,end-1]);
    return result;
};