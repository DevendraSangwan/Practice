# que-1
class Solution:
  def romanToInt(self, s: str) -> int:
    roman_map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    total = 0
    n = len(s)

    for i in range(n):
      if i < n - 1 and roman_map[s[i]] < roman_map[s[i + 1]]:
        total -= roman_map[s[i]]
      else:
        total += roman_map[s[i]]

    return total


sol = Solution()
print(sol.romanToInt('III'))  
print(sol.romanToInt('LVIII')) 
print(sol.romanToInt('MCMXCIV')) 

# que-2
num1 = [1,2]
num2 = [3,4]
A = sorted(num1 + num2)
n = len(A)
if n % 2 != 0:
    median = A[n // 2]
else:
    median = (A[(n // 2) - 1] + A[n // 2]) / 2
print("Median:", median)

# Que-3
A=[[1,4,5],[1,3,4],[2,6]]
B=[]
for i in range(len(A)):
   for j in range(len(A[i])):
      B.append(A[i][j])
B.sort()
print(B)
