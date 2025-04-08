/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let bin="0";
    while(parseInt(bin,2)<n){
        bin+="1"
    }
    return parseInt(bin,2)
};
