#This project is simulating a physics teacher providing thier students with some functions to calculate fundamental physical proterties
#This project showcases knowledge of function declaration, and parameters

train_mass = 22680
train_acceleration = 10
train_distance = 100

bomb_mass = 1

#function to convert Fahrenheit to Celsius
def f_to_c(f_temp):
  c_temp = (f_temp - 32) * 5/9
  return c_temp

#Testing f_to_c function
f100_in_celsius = f_to_c(100)
print(f100_in_celsius)

#function to convert Celsius to Fahrenheit
def c_to_f(c_temp):
  f_temp = c_temp * (9/5) + 32
  return f_temp

#Testing c_to_f function
c0_in_fahrenheit = c_to_f(0)
print(c0_in_fahrenheit)

#function to get total force
def get_force(mass, acceleration):
  return mass*acceleration

#Testing get_force
train_force = get_force(train_mass, train_acceleration)
print("The GE train supplies " + str(train_force) +
     " Newtons of force.")

#function to get total energy
def get_energy(mass, c=3*10**8):
  return mass*c

#Testing get_energy
bomb_energy = get_energy(bomb_mass)
print("A 1kg bomb supplies " + str(bomb_energy) +
     " Joules.")

#function to get total work
def get_work(mass, acceleration, distance):
  return get_force(mass, acceleration) * distance

#Testing get_work
train_work = get_work(train_mass, train_acceleration, train_distance)
print("The GE train does " + str(train_work) +
     " Joules of work over " + str(train_distance) +
     " meters.")

