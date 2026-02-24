/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s,k) {
    if(s.length===0)
    return "";
    const stack=[];
   for (let i of s){
       if(stack.length===0){
       stack.push({char:i,count:1})
           continue;
       }
               if(i!==stack[stack.length-1].char){
         stack.push({char:i,count:1})
        }
       else if(i===stack[stack.length-1].char){
           stack[stack.length-1].count++;
         if(stack[stack.length-1].count===k)
            stack.pop();
       }
   }
    return stack.map(i=>i.char.repeat(i.count)).join('');
};