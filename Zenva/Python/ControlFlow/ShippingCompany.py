#This project is simiulating a shipping company and thier different options.
#This project showcases knowledge of control flow

#Function that finds to cost of ground shipping
def ground_shipping_cost(weight):
  if weight <= 2:
    cost = 1.5
  elif weight > 2 and weight <= 6:
    cost = 3
  elif weight > 6 and weight <= 10:
    cost = 4
  elif weight > 10:
    cost = 4.75
  
  total_cost = (cost * weight) + 20
  return total_cost

#flat rate for premium ground shipping
premium_ground = 125

#Function that finds the cost of drone shipping
def drone_shipping_cost(weight):
  if weight <= 2:
    cost = 4.5
  elif weight > 2 and weight <= 6:
    cost = 9
  elif weight > 6 and weight <= 10:
    cost = 12
  elif weight > 10:
    cost = 14.25
  
  total_cost = cost * weight
  return total_cost

#Function that takes weight of package and tells the user which shipping method is the cheapest option
def cheap_option(weight):
  gsw = ground_shipping_cost(weight)
  dsw = drone_shipping_cost(weight)
  psw = premium_ground
  if gsw < dsw and gsw < psw:
    return "You should ship using ground shipping, it will cost $" + str(gsw)
  elif dsw < gsw and dsw < psw:
    return "You should ship using drone shipping, it will cost $" + str(dsw)
  else:
    return "You should ship using premium ground shipping, it will cost $125"

#testing
print(cheap_option(2))
print(cheap_option(45))
print(cheap_option(6))
print(cheap_option(4.56))
  