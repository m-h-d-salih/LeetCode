/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let n=num;
    let s=0;
    while(n>0){
        let a=n%10;
        s=s*10+a;
        n=Math.trunc(n/10)
    }
    return s.toString().split('').reverse().join('')==num;
};