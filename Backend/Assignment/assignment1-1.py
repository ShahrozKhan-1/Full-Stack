# Question 1

import os, math

operator = None

def factorial(operand):
    try:
        return (math.factorial(operand))
    except:
        return f"Factorial is only defined for non-negative integers."

def square_root(operand):
    try:
        return (math.sqrt(operand))
    except:
        return f"Square root is only defined for non-negative numbers."

def exponential(operand):
    return (math.exp(operand))

def user_input():
    print("Select number from below: \n1.Factorial \n2.Square Root \n3.Exponential")
    try:
        operator = int(input("Enter your choice: "))
        return operator
    except ValueError:
        print("Invalid input. Please enter a number corresponding to an operation.")
        return None

def get_operand():
    while True:
        try:
            operand = int(input("Enter a number: "))
            return operand
        except ValueError:
            print("Invalid input. Please enter a valid integer.")



os.system('cls')


while True:
        operator = user_input()
        
        if operator is None:
            continue 

        match operator:
            case 1:
                operand = get_operand()
                print(f"Factorial of {operand} is: {factorial(operand)}")
            
            case 2:
                operand = get_operand()
                print(f"Square Root of {operand} is: {square_root(operand)}")
            
            case 3:
                operand = get_operand()
                print(f"Exponential of {operand} is: {exponential(operand)}")
            
            case _:
                print("Invalid choice. Please choose a valid operation from the menu.")
        
        retry = input("\nDo you want to perform another operation? (y/n): ").lower()
        if retry != 'y':
            print("Exiting the program.")
            break


