""" 
    Title: Simple program for storage management
    Author: Breno D. Chrispim
    Description: Program to save information about the storage of products. Save the product name and quantity in stock, allow to add/subtract/modify/show the product 
    database.
    Possible improvements: Add save/load option.
"""

# Imports
import copy

# Definitions

# Initial message
hello_message = """ 
    Hello!\n                
    This program is designed to save information about the storage of products. Save the product name and quantity in stock,
    allow to add/subtract/modify/show the product database.\n"""

# Prompt message
ask_what_to_do = """ 
    What do you want to do?
    1. Create database
    2. Show database
    3. Add item to database
    4. Remove item from database
    5. Modify item in database
    6. Clean items with zero quantity
    7. Exit
    """
        
# Functions definition
# Find product in database
def find_element(database, product):
    """ 
    Description: Return the index of the database the contains the product, if 
    not found return -1
    Input:
        database: list of tuples [(product, quantity)]
        product: string
    Output:
        index: int
    """

    # Definitions
    index = -1

    for i in range(len(database)):
        if product in database[i]:
            index = i

    return index

# Add element to database
def add_element(database, product, quantity):
    """
    Description: Function that modify the database to include product and its quantity. Also return the database.
    Input:
        database: list of tuples
        product: string
        quantity: int
    Saida:
        [(product, quantity)]: list of tuples
    """
    # Definitions
    index = find_element(database, product)
        
    # Verify if the product is in database or not
    if (index >= 0):
        database[index] = list(database[index])             # Transform item into list to allow for modifications
        database[index][1] = database[index][1] + quantity  # Modify the quantity
        database[index] = tuple(database[index])            # Return item to tuple
    else:
        database.append((product, quantity))                # If item not found, add item to database
    
    return database

# Subtract product from database
def remove_element(database, product, quantity):
    """ 
    Description: Function that modify the database to remove product and its quantity. Also return the database.
    Input:
        database: list of tuples
        product: string
        quantity: int
    Saida:
        [(product, quantity)]: list of tuples
    """

    # Definitions
    index = find_element(database, product)

    # Verify if item is in database
    if index == -1:                                                             # Index of product not found, see find_element function
      print(f"Product {product} not found.")
      return database
    elif (index >= 0) and (database[index][1] >= quantity):                     # Index of found product and the product can be removed
      
      database[index] = list(database[index])                                   # Transform tuple into list to modify quantity
      database[index][1] = database[index][1] - quantity                        # Modify quantity
      database[index] = tuple(database[index])                                  # Return tuple to list

      print(f"The quantity {quantity} was removed from the product {product}.")
    
      if database[index][1] > quantity:                                         # Case that remains product in database
    
        print(f"It remains {database[index][1]} of the product {product}")
        return database

      elif database[index][1] == 0:                                             # Case that no product remains in database
    
        print(f"All of the product {product} was removed.")
        return database
    else:                                                                       # Case not enough items to remove
        print("Not enough items to remove!")
        return database

# Show product database
def show(database):
    """ 
    Description: Function that shows database
    Input:
        database: list of tuples
    Saida:
        None
    """

    if len(database) == 0:                                  # Verify if database is not empty
        print("Empty database. Create one first!")
    else:
        for i, item in enumerate(database):
            print(f"Item {i}: {item[0]}, quantity {item[1]}")
    
# Clean product with zero from database
def clean_database(database):
    """ 
    Description: Clean database of items with zero quantity. Also return the cleaned database.
    Input:
        database: list of tuples
    Saida:
        [(product, quantity)]: list of tuples
    """

    # Create deep copy of database to avoid indexing problems
    clean_database = copy.deepcopy(database)

    for element in database:
      item, quantity = element
      if quantity == 0:
        clean_database.remove((item, quantity))

    return clean_database

# Replace element in database
def replace_element(database, product_old, product_new, quantity):
    """ 
    Description: Modify item in database by replacing (product_old, quantity_old) with (product_new, quantity_new). Also return the cleaned database.
    Input:
        database: list of tuples
        product_old: string
        product_new: string
        quantity_new: int
    Saida:
        [(product, quantity)]: list of tuples
    """
    
    # Definitions
    index = find_element(database, product_old)
    
    # Verify if item in database
    if index >= 0:                                      # Check if item is found
        database.pop(index)                             # Remove old item from database
        database.insert(index, (product_new, quantity)) # Insert nem item into database
    
    # Product not found case
    else:
        print("Product not found.")
                
    return database

    # Function use
if __name__ == "__main__":
    
    # Loop control variable
    on = True

    # Greeting message
    print(hello_message)
    while on:
        try:
            number = int(input(ask_what_to_do))
        except ValueError:
            print("Invalid input. Please enter a valid option.")
        
        if number == 1: # Create database
            database = []
            print("An empty database was created!")
        elif number == 2: # Show database
            show(database)
        elif number == 3: # Add item to database
            try:
                product = str(input("What product?"))
                quantity = int(input("What quantity?"))
            except ValueError:
                print("Invalid input.")
            
            add_element(database, product, quantity)
            print("OK!")
        elif number == 4: # Remove item from database
            try:
                product = str(input("What product?"))
                quantity = int(input("What quantity?"))
            except ValueError:
                print("Invalid input.")
            
            remove_element(database, product, quantity)
            print("OK!")
        elif number == 5: # Modify item in database
            try:
                product_old = str(input("What product to replace?"))
                product_new = str(input("What product to insert?"))
                quantity = int(input("What quantity?"))
            except ValueError:
                print("Invalid input.")
            
            replace_element(database, product_old, product_new, quantity)
            print("OK!")
        elif number == 6: # Clean items with zero quantity
            print("Old database:")
            show(database)
            print("New database:")
            database = clean_database(database)
            show(database)
        elif number == 7: # Exit
            print("Goodbye!")
            on = False