# Create a function named divisible_by_ten() that takes a list of numbers named nums as a parameter.

# Return the amount of numbers in that list that are divisible by 10.

#Write your function here
def divisible_by_ten(nums):
  num_divisible = 0
  for num in nums:
    if num % 10 == 0:
      num_divisible+=1
  return num_divisible

#Uncomment the line below when your function is done
print(divisible_by_ten([20, 25, 30, 35, 40]))