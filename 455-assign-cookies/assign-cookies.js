/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let child=0,cookie=0,result=0;
    let sortedG=g.sort((a,b)=>a-b);
    let sortedS=s.sort((a,b)=>a-b);
    while(child < sortedG.length && cookie < sortedS.length){
        if(sortedS[cookie]>=sortedG[child]){
            result++;
            child++;
            cookie++;
        }else 
        cookie++;
    }
    return result;
};
