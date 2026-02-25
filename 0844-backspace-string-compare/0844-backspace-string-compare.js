/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return removeBackspace(s).join('')===removeBackspace(t).join('')
};
const removeBackspace=(s)=>{
        const arr=[];
        for (let i of s){
        if(i==='#')
        arr.pop()
        else
        arr.push(i)
    }
    return arr;
}