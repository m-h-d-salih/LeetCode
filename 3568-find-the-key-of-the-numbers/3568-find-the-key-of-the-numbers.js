/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
    num1 = num1.toString().padStart(4, '0');
    num2 = num2.toString().padStart(4, '0');
    num3 = num3.toString().padStart(4, '0');
    let res = "";
    for (let i = 0; i < 4; i++) {
        res += Math.min(num1[i], num2[i], num3[i]);
    }
    return parseInt(res, 10);
};