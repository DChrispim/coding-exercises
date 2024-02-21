""" 
    Title: Simple use of for and while loop
    Author: Breno D. Chrispim
    Description: Print the floor number of an building. The owner of the building do not wish to include the floor 13. Additional option to reverse order.
"""
# Definitions
n_floors = 20            # Define the number of floors
has_zero_floor = False   # Boolean indicating if the floor 0 is present
floor_to_exclude = 13    # Floor to exclude
reverse_order = False    # Boolean indicating to print in reverse order
which_loop_use = "while"  # Boolean indicating which loop (while of for) to use

if which_loop_use == "for":

    # Using For loop start
    for i in sorted(range(not has_zero_floor, n_floors+1), reverse=reverse_order):
        if i == floor_to_exclude:
            continue
        else:
            print("Floor number: " + str(i))
    # For loop case

elif which_loop_use == "while":
    i = 0              # Starting value for the counter
    # While loop start
    while i < n_floors+1:
        if i == floor_to_exclude:
            pass
        elif reverse_order:
            print("Floor number: " + str(n_floors - i))
        else:
            print("Floor number: " + str(i))
        i += 1
    # While loop end

else:
    print("Not supported")
