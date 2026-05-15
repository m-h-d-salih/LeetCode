/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map=new Map();
    for(let i of s){
        if(map.has(i)){
           let count=map.get(i);
           map.set(i,++count);
        }else{
            map.set(i,1)
        }
    }
   const arr=[...map.values()].map(i=>i%2===0?i:i-1).reduce((a,b)=>a+b,0);
   let isOdd=[...map.values()].find(i=>i%2!==0)
   return isOdd?arr+1:arr;
   
};