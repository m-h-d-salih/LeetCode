/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    function countVowel(str){
        let count=0;
        for(let i of str.toLowerCase()){
            if(i==='a' || i==='e' || i==='i' || i==='o' || i==='u'){
                count++;
            }
        }
            return count;
    }
    const partOne = s.slice(0, s.length / 2)
    const partTwo = s.slice(s.length / 2, s.length)
    const firstCount=countVowel(partOne);
    const secondCount=countVowel(partTwo);
    return firstCount===secondCount;
};