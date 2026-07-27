/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const medals=["Gold Medal", "Silver Medal", "Bronze Medal"];
    const ordered=[...score].map((value, originalPos) => ({ value, originalPos })).sort((a,b)=>b.value-a.value);
    const result=new Array(score.length)
    for(let i=0;i<result.length;i++){
        if(i<3) result[ordered[i].originalPos]=medals[i];
        else result[ordered[i].originalPos]=`${i+1}`
    }
    return result;
};