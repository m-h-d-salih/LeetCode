/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let count1  = 0;
    let  count2 = 0
    for(let i = 0; i < s.length; i++){

                 if(s[i] == "(") {
                     count2 ++;

                }
                else if(s[i] == ")") {
                if (count2 > 0) {
                    count2--;  
                } else {
                    count1++;    
                }

                } 
    }

    return  count1 + count2;
};