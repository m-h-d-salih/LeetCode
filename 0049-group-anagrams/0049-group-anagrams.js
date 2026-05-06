/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map=new Map();
    for(let s of strs){
      let sorted=s.split('').sort().join('')
      if(map.has(sorted))
        map.get(sorted).push(s);
      else
      map.set(sorted,[s])
    }
    return [...map.values()];
};