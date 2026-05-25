/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
  const indexes = [];
  const result=[];
for (let i = 0; i < s.length; i++) {
  if (s[i] === c) indexes.push(i);
}
let minDistance=Infinity;
for(let i in s){
    for(let j of indexes){
        let temp=Math.abs(j-i)
        minDistance=Math.min(minDistance,temp);
    }
    result.push(minDistance);
    minDistance=Infinity
}
    return result;
};