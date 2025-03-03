/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count=0;
    let height=[...heights];
    let sorted=heights.sort((a,b)=>a-b);
    for(let i=0;i<height.length;i++){
        if(height[i]!==sorted[i]){
            count++;
        }
    }
    return count;
};