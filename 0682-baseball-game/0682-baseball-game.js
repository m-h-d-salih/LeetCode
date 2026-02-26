/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const arr=[];
    for(let i of operations){
        switch(i){
            case 'C':arr.pop();
            break;
            case '+':arr.push(arr[arr.length-1]+arr[arr.length-2])
            break;
            case 'D':arr.push(arr[arr.length-1]*2)
            break;
            default:arr.push(Number(i))
        }
    }
    return arr.reduce((acc,i)=>acc+i,0);
};