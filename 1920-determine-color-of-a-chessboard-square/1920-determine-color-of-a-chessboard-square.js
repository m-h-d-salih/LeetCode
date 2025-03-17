/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let num=0;
    const arr=coordinates.split('');
    if(arr[0]==='a'||arr[0]==='c'||arr[0]==='e'||arr[0]==='g'){
        num=1+Number(arr[1]);
    }
    else if(arr[0]==='b'|| arr[0]==='d'|| arr[0]==='f'|| arr[0]==='h'){
        num=2+Number(arr[1])
    }
    return num%2===0?false:true;
};