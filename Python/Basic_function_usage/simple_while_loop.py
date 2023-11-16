""" 
    Title: Simple use of while loop
    Author: Breno D. Chrispim
    Exercise: Print the floor number of an building. The owner of the building do not wish to include the floor 13.
"""
# Definitions
n_floors = 20           # Define the number of floors
i = 0                   # Starting value for the counter
floor_to_exclude = 13   # Floor to exclude

# While loop start
while i < n_floors+1:
    if i == floor_to_exclude:
        pass
    else:
        print(i)
    i += 1
# While loop end