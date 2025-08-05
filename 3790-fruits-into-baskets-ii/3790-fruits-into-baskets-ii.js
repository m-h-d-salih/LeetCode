/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let count=fruits.length;
        for(let i in fruits){
            for(let j in baskets){
                if(fruits[i]<=baskets[j]){
                    count--;
                    fruits[i]=0;
                    baskets[j]=0;
                    break;
                }
            }
        }
    return count;
};