# Create a function called middle_element that has one parameter named lst.

# If there are an odd number of elements in lst, the function should return the middle element. 
# If there are an even number of elements, the function should return the average of the middle two elements.

#Write your function here
def middle_element(lst):
  if len(lst) %2 == 1:
    return lst[int((len(lst) - 1) /2)]
  else:
    return ((lst[int(len(lst)/2)]) + (lst[int(len(lst)/2)-1])) /2
    

#Uncomment the line below when your function is done
print(middle_element([5, 2, -10, -4, 4, 5]))