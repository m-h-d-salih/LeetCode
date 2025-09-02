/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const getNextNumber=(n)=>{
        sum=0;
        while(n>0){
            let digit=n%10;
            sum+=digit*digit;
            n=Math.floor(n/10)
        }
        return sum;
    }
    let set=new Set();
    while (n!==1 && !set.has(n)){
        set.add(n);
        n=getNextNumber(n)
    }
    return n===1;
};