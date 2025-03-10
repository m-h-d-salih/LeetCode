/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const arr=[];
    const temp=[];
    for(let i=left;i<=right;i++){
        temp.push(i)
        let n=i.toString().split('');
        for(let j of n){
            if(i%Number(j)!==0){
                arr.push(i)
                break;
            }
        }
               
    }
    return temp.filter(i=>!arr.includes(i));
};