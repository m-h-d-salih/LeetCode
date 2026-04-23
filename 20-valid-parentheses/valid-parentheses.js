/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[];
    const map = new Map([
  ['(', ')'],
  ['[', ']'],
  ['{', '}']
]);
    for(let i of s){
        if(map.has(i)){
           stack.push(map.get(i))
        }
        else{
            if(stack.length===0 || i!==stack[stack.length-1])
            return false
            else
            stack.pop();
        }
    }
    return stack.length===0;
};