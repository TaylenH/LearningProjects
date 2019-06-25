# #Welcome to The Boredless Tourist,
# an online application giving you the power to find the parts of the city that fit the pace of your life.
# We at The Boredless Tourist run a recommendation engine using Python. 
# We first evaluate what a person's interests are and then give them recommendations in their area to venues, 
# restaurants, and historical destinations that we think they'll be engaged by. Let's get started!

#List of possible destinations
destinations = ["Paris, France", "Shanghai, China", "Los Angeles, USA", "São Paulo, Brazil", "Cairo, Egypt"]
#Test traveler
test_traveler = ['Erin Wilkes', 'Shanghai, China', ['historical site', 'art']]

#function to retrieve destination index from destinations
def get_destination_index(destination):
  for i in range(len(destinations)):
    if destination == destinations[i]:
      destination_index = i
      return destination_index
    
#expected resuls: 2
print(get_destination_index("Los Angeles, USA"))

#function to retreive index of traveler destination from destinations list
def get_traveler_location(traveler):
  traveler_destination = traveler[1]
  traveler_destination_index = get_destination_index(traveler_destination)
  return traveler_destination_index

#test destination index
test_destination_index = get_traveler_location(test_traveler)
#expected results: 1
print(test_destination_index)

#list of attractions for each desination
attractions = [[], [], [], [], []]
#function to add attractions for each destination
def add_attraction(destination, attraction):
  try:
  	destination_index = get_destination_index(destination)
  	attractions[destination_index].append(attraction)
  	return
  except ValueError:
    return
  
#adding attractions
add_attraction("Los Angeles, USA", ['Venice Beach', ['beach']])
add_attraction("Paris, France", ["the Louvre", ["art", "museum"]])
add_attraction("Paris, France", ["Arc de Triomphe", ["historical site", "monument"]])
add_attraction("Shanghai, China", ["Yu Garden", ["garden", "historcical site"]])
add_attraction("Shanghai, China", ["Yuz Museum", ["art", "museum"]])
add_attraction("Shanghai, China", ["Oriental Pearl Tower", ["skyscraper", "viewing deck"]])
add_attraction("Los Angeles, USA", ["LACMA", ["art", "museum"]])
add_attraction("São Paulo, Brazil", ["São Paulo Zoo", ["zoo"]])
add_attraction("São Paulo, Brazil", ["Pátio do Colégio", ["historical site"]])
add_attraction("Cairo, Egypt", ["Pyramids of Giza", ["monument", "historical site"]])
add_attraction("Cairo, Egypt", ["Egyptian Museum", ["museum"]])

#function to find attractions that match customer interestes
def find_attractions(destination, interests):
  destination_index = get_destination_index(destination)
  attractions_in_city = attractions[destination_index]
  attractions_with_interest = []
  for attraction in attractions_in_city:
    attraction_tags = attraction[1]
    for interst in interests:
      for tag in attraction_tags:
        if tag == interst:
          attractions_with_interest.append(attraction[0])
  return attractions_with_interest

la_arts = find_attractions("Los Angeles, USA", ['art'])
print(la_arts)

#function that connects people with attractions they are interested in
def get_attractions_for_traveler(traveler):
  traveler_destination = traveler[1]
  traveler_interests = traveler[2]
  traveler_attractions = find_attractions(traveler_destination, traveler_interests)
  interests_string = "Hi "
  interests_string += traveler[0]
  interests_string += ", we think you'll like these places around "
  interests_string += (traveler_destination + ": ")
  for i in range(len(traveler_attractions)):
    attraction = traveler_attractions[i]
    if i != len(traveler_attractions) - 1:
      interests_string += (attraction + ", ")
    else:
      interests_string += (attraction + ".")
  return interests_string

smills_france = get_attractions_for_traveler(['Dereck Smill', 'Paris, France', ['monument']])
print(smills_france)