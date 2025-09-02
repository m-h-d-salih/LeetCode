class Solution:
    def isHappy(self, n: int) -> bool:
        myset=set()
        while n!=1 and n not in myset:
            myset.add(n)
            n=sum(int(i)**2 for i in str(n))
        return n==1