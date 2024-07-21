# def convert_seconds(seconds):
#     hours = seconds // 3600
#     minutes = (seconds - hours * 3600) // 60
#     remaining_seconds = seconds - hours * 3600 - minutes * 60
#     return hours, minutes, remaining_seconds

# result = convert_seconds(5000)
# print(result) 
# print(type(result)) 

# a = ["eat", "sleep", "repeat"]
# b = "geek"
# obj1 = enumerate(a)
# obj2 = enumerate(b)
# print("Return type: ", type(obj1))
# print(list(enumerate(a)))
# # print(enumerate(a))
# print(list(enumerate(b, 2)))

# def skip_elements(elements):
#     for i in list(enumerate(elements)):
#         if i[0]%2 == 0:
#              print(i[1])
    
# print(skip_elements(["a", "b", "c", "d", "e", "f", "g"]))

# file_counts = {"jgp":10, "txt":14, "csv":2, "py":23}
# for i in file_counts:
#     print(i)

# for ext, amount in file_counts.items():
#     print(f"there are {amount} files with the .{ext} extensions")
    
# for ext in file_counts.values():
#     print(f"{ext}")

# try:
#   print(x)
# except NameError:
#   print("Variable x is not defined")
# except:
#   print("Something else went wrong")

# try:
#     items = [1,2,3,4,5]
#     item = items[6]
#     print(item)
# except Exception as e:
#     print (e)  

# with open('test.txt', 'w') as file:
#     file.write("Hello, World!")
    
# with open('test.txt', 'r') as file:
#     print(file.read())
    
    
menu = ["espresso", "cappuccino", "latte"]
def find_coffee(coffee):
    if coffee[0] == "c":
        return coffee
    
data = list(map(find_coffee, menu))
print(data)

menu = ["espresso", "cappuccino", "latte"]
def find_coffee(coffee):
    if coffee[0] == "c":
        return coffee
    
data = list(filter (find_coffee, menu))
print(data)