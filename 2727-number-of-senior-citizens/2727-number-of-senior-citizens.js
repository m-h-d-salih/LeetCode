/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let maxAge=0;
    details.forEach(item=>{
        let temp=item.slice(11,13)
        temp[0]+temp[1]>60?maxAge++:null
    })
    return maxAge;
};