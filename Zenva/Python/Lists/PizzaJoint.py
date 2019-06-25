#This project simulates organizing sales data of a pizza joint
#This project showcases knowledge of list functions and methods

#list of pizza toppings
toppings = ['pepperoni', 'pineapple', 'cheese', 'sausage', 'olives', 'anchovies', 'mushrooms']

#list of pizza costs
prices = [2, 6, 1, 3, 2, 7, 2]

#number of pizza types
num_pizzas = len(toppings)
print("We sell " + str(num_pizzas) + " different kinds of pizza!")

#combined list of pizza types and prices
pizzas = list(zip(prices, toppings))
pizzas.sort()
print(pizzas)

cheapest_pizza = pizzas[0]
priciest_pizza = pizzas[-1]
three_cheapest = pizzas[:3]
print(three_cheapest)
num_two_dollar_slices = prices.count(2)
print(num_two_dollar_slices)