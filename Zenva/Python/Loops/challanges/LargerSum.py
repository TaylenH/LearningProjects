# Create a function named larger_sum() that takes two lists of numbers as parameters named lst1 and lst2.

# The function should return the list whose elements sum to the greater number. 
# If the sum of the elements of each list are equal, return lst1.

#Write your function here
def larger_sum(lst1, lst2):
  def sumup(lst):
    num = 0;
    for i in lst:
      num+=i
    return num
  l1s = sumup(lst1)
  l2s = sumup(lst2)
  if l1s > l2s:
    return lst1
  elif l2s > l1s:
    return lst2
  else:
    return lst1
  

  
  

#Uncomment the line below when your function is done
print(larger_sum([1, 9, 5], [2, 3, 7]))