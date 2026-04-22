/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=prices[0];
    let max=0
    for(let i=1;i<prices.length;i++){
        if(min>prices[i]){
        min=prices[i]
        }
        newProfit=prices[i]-min>max?prices[i]-min:max
        max=newProfit;
    }
    return max;
};