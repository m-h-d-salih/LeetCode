/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [[1]];
    if(numRows===1){
        return result;
    }
    result[0] = [1];
    result[1] = [1,1];
for (let row = 2; row < numRows; row++){
    result[row] = [1];
    for (let col = 1; col <= row -1; col++){
        result[row][col] = result[row-1][col] + result[row-1][col-1];
        result[row].push(1);
    }
}
return result;
};