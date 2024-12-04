public class Solution {
    public bool RotateString(string s, string goal) {
        int count=0;
        while(count<s.Length){
            if(s==goal) return true;
            s=s.Substring(1)+s[0];
            count++;
        }
        return false;
    }
}