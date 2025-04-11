/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    const result=[0,0];
    mat.forEach((item,index)=>{
        const ans=item.reduce((a,b)=>a+b,0);
        if(ans>result[1]){
            result[1]=ans;
            result[0]=index;
        }
    })
    return result;
};