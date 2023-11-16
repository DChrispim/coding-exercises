""" 
    Title: Simple use of reverse in for loop
    Author: Breno D. Chrispim
    Exercise: Print the floor number of an building in reverse order. The owner of the building do not wish to include the floor 13.
"""
# Definitions
n_floors = 20           # Define the number of floors
has_zero_floor = False  # Boolean indicating if the floor 0 is present
floor_to_exclude = 13   # Floor to exclude

#For loop start
for i in reversed(range(not has_zero_floor,n_floors+1)):
    if i == floor_to_exclude:
        continue
    else:
        print(i)
#For loop end