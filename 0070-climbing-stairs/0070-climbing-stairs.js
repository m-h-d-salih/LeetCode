/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n==1 || n==2){
        return n
    }
     let prev2 = 1;
    let prev1 = 2;
    for(let i=3;i<=n;i++){
        let t=prev1+prev2;
        prev2=prev1;
        prev1=t;
    }
    return prev1;
};