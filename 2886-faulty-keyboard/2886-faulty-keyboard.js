/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
   const arr=[];
   for(let i of s){
       if(i==='i'){
           arr.reverse()
       }else{
           arr.push(i)
       }
   }
   return arr.join().replaceAll(',','');
};