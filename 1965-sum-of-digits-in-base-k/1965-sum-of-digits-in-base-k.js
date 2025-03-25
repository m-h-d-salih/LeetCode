/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let sum=0;
    let num=n.toString(k);
    while(num>0){
        let a=num%10;
        sum+=a;
        num=Math.trunc(num/10);
    }
    return sum;
};