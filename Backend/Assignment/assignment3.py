def add_book(inventory, book_title):
    if book_title in inventory:
        print(f"The book '{book_title}' is already in the inventory.")
    else:
        inventory[book_title] = None 
        print(f"The book '{book_title}' has been added to the inventory.")

def borrow_book(inventory, book_title, borrower_name):
    if book_title not in inventory:
        print(f"The book '{book_title}' is not available in the inventory.")
    elif inventory[book_title] is None:
        inventory[book_title] = borrower_name 
        print(f"'{book_title}' has been borrowed by {borrower_name}.")
    else:
        print(f"Sorry, the book '{book_title}' is currently borrowed by {inventory[book_title]}.")

def return_book(inventory, book_title):
    if book_title not in inventory:
        print(f"The book '{book_title}' is not in the inventory.")
    elif inventory[book_title] is None:
        print(f"The book '{book_title}' was not borrowed.")
    else:
        inventory[book_title] = None 
        print(f"The book '{book_title}' has been returned and is now available.")

def check_availability(inventory, book_title):
    if book_title not in inventory:
        print(f"The book '{book_title}' is not in the inventory.")
    elif inventory[book_title] is None:
        print(f"The book '{book_title}' is available.")
    else:
        print(f"The book '{book_title}' is currently borrowed by {inventory[book_title]}.")

def main():
    library_inventory = {}

    while True:
        print("\nLibrary Management System:")
        print("1. Add a New Book")
        print("2. Borrow a Book")
        print("3. Return a Book")
        print("4. Check Book Availability")
        print("5. Exit")
        choice = input("Select an option (1-5): ")

        if choice == '1':
            book_title = input("Enter the title of the book to add: ")
            add_book(library_inventory, book_title)
        
        elif choice == '2':
            book_title = input("Enter the title of the book to borrow: ")
            borrower_name = input("Enter your name: ")
            borrow_book(library_inventory, book_title, borrower_name)
        
        elif choice == '3':
            book_title = input("Enter the title of the book to return: ")
            return_book(library_inventory, book_title)
        
        elif choice == '4':
            book_title = input("Enter the title of the book to check availability: ")
            check_availability(library_inventory, book_title)
        
        elif choice == '5':
            print("Exiting the Library Management System.")
            break
        
        else:
            print("Invalid choice. Please choose a valid option.")

if __name__ == "__main__":
    main()
