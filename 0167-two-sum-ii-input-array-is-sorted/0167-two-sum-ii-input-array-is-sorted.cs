public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        int left=0,right=numbers.Length-1;
        while(left<right){
            int sum=numbers[left]+numbers[right];
            if(sum==target){
                int[] arr=new int[]{left+1,right+1};
                return arr;
            }
            else if(sum<target){
                left++;
            }else{
            right--;
        }
        }
        return [];
    }
}
