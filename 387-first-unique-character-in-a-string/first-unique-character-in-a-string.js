/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map=new Map();
    for(let i of s){
        if(map.has(i)){
            let data=map.get(i);
            map.set(i,++data);
        }else{
            map.set(i,1);
        }
    }
    for(let i=0;i<s.length;i++){
        if(map.get(s[i])===1)
        return i;
    }
    return -1;
};