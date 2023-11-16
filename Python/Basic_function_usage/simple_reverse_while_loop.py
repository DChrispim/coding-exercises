""" 
    Title: Simple use of reversed while loop
    Author: Breno D. Chrispim
    Exercise: Print the floor number of an building in reserve order. The owner of the building do not wish to include the floor 13.
"""
# Definitions
n_floors = 20           # Define the number of floors
i = 0                   # Starting value for the counter
floor_to_exclude = 13   # Floor to exclude

# While loop start
while n_floors >= 0:
    if n_floors == 13:
        pass
    else:
        print(n_floors)
    n_floors -= 1
# While loop end