/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const result=[];
    const arr=grid.flat();
    for(let i=0;i<arr.length;i++){
        if(!arr.includes(i+1)){
            result.push(i+1);
        }
    }
    const duplicates=arr.find(item=>arr.indexOf(item)!==arr.lastIndexOf(item));
    result.unshift(duplicates);
    return result;
};