/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  let i=0;
   let inc=0;
   let dec=s.length;
   const num=[];
   while (num.length!==s.length+1){
    num[i]=s[i]==='D'?dec--:inc++;
    i++;
   }
   return num;
};