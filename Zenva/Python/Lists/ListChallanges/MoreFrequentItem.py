# Create a function named more_frequent_item that has three parameters named lst, item1, and item2.

# Return either item1 or item2 depending on which item appears more often in lst.

# If the two items appear the same number of times, return item1.

#Write your function here
def more_frequent_item(lst, item1, item2):
  i1c = lst.count(item1)
  i2c = lst.count(item2)
  if i1c > i2c:
    return item1
  elif i2c > i1c:
    return item2
  else:
    return item1
#Uncomment the line below when your function is done
print(more_frequent_item([2, 3, 3, 2, 3, 2, 3, 2, 3], 2, 3))