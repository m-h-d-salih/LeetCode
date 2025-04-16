/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let count=0;
    const arr=text.split(' ')
    for(let i of arr){
        let type=true;
        for(let j of brokenLetters){
            if(i.includes(j)){
                type=false
                
            }
        }
        if(type)count++;
    }
    return count;
};