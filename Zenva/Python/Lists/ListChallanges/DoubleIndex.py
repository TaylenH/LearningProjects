# Create a function named double_index that has two parameters named lst and index.

# The function should double the value of the element at index of lst and return the new list with the doubled value.

# If index is not a valid index, the function should return the original list.

#Write your function here
def double_index(lst, index):
  try:
    lst2 = lst
    lst2[index] *= 2
    return lst2
  except IndexError:
    return lst

#Uncomment the line below when your function is done
print(double_index([3, 8, -10, 12], 2))