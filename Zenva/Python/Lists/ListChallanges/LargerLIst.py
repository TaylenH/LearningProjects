# Write a function named larger_list that has two parameters named lst1 and lst2.

# The function should return the last element of the list that contains more elements. 
# If both lists are the same size, then return the last element of lst1.

#Write your function here
def larger_list(lst1, lst2):
  l1l = len(lst1)
  l2l = len(lst2)
  if l1l > l2l:
    return lst1[-1]
  elif l2l > l1l:
    return lst2[-1]
  else:
    return lst1[-1]

#Uncomment the line below when your function is done
print(larger_list([4, 10, 2, 5], [-10, 2, 5, 10]))