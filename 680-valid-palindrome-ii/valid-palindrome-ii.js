/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome=(i,j,s)=>{
    while(i<j){
        if(s[i]!==s[j])
        return false;
        i++;
        j--;
    }
    return true
}
var validPalindrome = function(s) {
    let left=0;right=s.length-1;
    while(left<right){
        if(s[left]!==s[right]){
            if(isPalindrome(left+1,right,s) || isPalindrome(left,right-1,s))  {
                return true;
            }else
            return false
        }else{
                left++;
                right--;
            }
    }
    return true;
};