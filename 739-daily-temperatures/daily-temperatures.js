/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const stack=[];
  const result=new Array(temperatures.length).fill(0);
  for(let i=0;i<temperatures.length;i++){
   while(stack.length!==0 && temperatures[i]>temperatures[stack[stack.length-1]]){
     result[stack[stack.length-1]]=i-stack[stack.length-1];
     stack.pop();
   }
   stack.push(i)
  }
    return result;
};