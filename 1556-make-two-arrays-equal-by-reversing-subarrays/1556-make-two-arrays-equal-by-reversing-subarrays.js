/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    if(target.length!==arr.length){
        return false;
    }
    target.sort((a,b)=>a-b);
    arr.sort((a,b)=>a-b);
    for(let i in target){
        if(target[i]!==arr[i])
        return false;
    }
    return true;
};