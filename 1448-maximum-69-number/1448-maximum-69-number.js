/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const arr=num.toString().split('');
    let result=num;
    for(let i in arr){
        if(parseInt(arr[i])===6)
        {
            arr[i]=9;
            let sum=arr.join().replaceAll(',','');
            if(sum>result){
                result=sum
            }
            arr[i]=6
        }else{
            arr[i]=6;
            let sum=arr.join().replaceAll(',','');
            if(sum>result){
                result=sum
            }
            arr[i]=9
        }
    }
    return Number(result);
};