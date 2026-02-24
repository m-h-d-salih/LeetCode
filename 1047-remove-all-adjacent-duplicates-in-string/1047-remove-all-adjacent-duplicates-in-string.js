/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    if(s.length===0)
    return 
    const stack=[];
    for (let i of s){
        if(stack[stack.length-1]!==i)
            stack.push(i);
        else
            stack.pop();
    }
    return stack.join('');
};