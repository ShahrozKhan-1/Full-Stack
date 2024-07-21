# # def sum(x, y):
# #     return print(x+y)


# # sum(4, 5)

# bill = 175.00
# tax_rate = 15
# # total_tax = (bill * tax_rate) / 100.00


# def Calculate_tax(bill, tax_rate):
#     return (bill * tax_rate) / 100.00

# print("Total tax", Calculate_tax(bill, tax_rate))
# # Calculate_tax(175.00, 15)

# my_global = 10

# def fn1():
#     local_v = 5
#     print("Access to Global", my_global)
#     print(local_v)
    
# fn1()
# # print(local_v)

# my_global = 10

# def fn1():
#     enclosed_v = 8
    
#     def fn2():
#         local_v = 5
#         print("Access to Global", my_global)
#         print("Access to enclosed", enclosed_v)
#     fn2()
    
# fn1()
# print(enclosed_v)

# pet = "long cat"
# # pet[2] = "f"
# print(pet)

# name = "awais"
# color = "blue"
# print("Name: " + name + ", Favorite color: " + color)

# var = "example"
# print(var * 3)

# text = "Random string with a lot of characters"
# print(text[-1])
# print(text[-2])

# color = "Orange"
# print(color[1:4])

# fruit = "pineapple"
# print(fruit[:4])

# print(fruit[4:])

# firstWord = "pine"
# secondWord = "pple"
# # word = firstWord + secondWord
# # print(word)

# word = firstWord[0:1] + "ss"
# print(word)

# pets = "cats and dogs"
# print(pets.index("and"))
# print(pets.index("c"))
# print(pets.index("dog"))

# print("drangons" in pets)

# name = "ahmad"
# xname = name.upper()
# xxname = xname.lower()
# print(name)
# print(xname)
# print(xxname)

# print(" yes ".strip())
# print(" yes ".lstrip())
# print(" yes ".rstrip())

# sentence = "the number of times e occurs in this string is: "
# print(sentence.count("e"))

# print("4".isnumeric())

# print("-".join(["b", "a"]))

# print(sentence.split())
# print(sentence.split("in"))

# name = "manny"
# number = len(name) * 3
# print("Hello {}, your lucky number is {}".format(name, number) )
# # print(f"Hello {name}, your lucky number is {number}" )

# price = 7.5
# with_tax = price * 1.09
# print(price, with_tax)
# 
# print("Base price: ${:.2f}. With Tax: ${:.2f} ".format(price, with_tax))

# def to_celsius(x):
#     return (x-32) * 5/9

# for x in range (0, 101, 10):
#     print("{:>3} F | {:>5.2f} C".format(x, to_celsius(x)))

# def get_word(sentence, n):
#     if n > 0:
#         words = sentence.split()
#         if n <= len(words):
#             return(words[n])
#     return("")

# print(get_word("This is a lesson about lists", 3))
# print(get_word("This is a lesson about lists", -4))
# print(get_word("Now we are cooking!", 1))
# print(get_word("Now we are cooking", 5))


sentence = "this is a sentence"
words = sentence.split()
words.append("sadbf")
print(words)


# fruits = ["apple", "banana", "apple"]
# fruits.insert(2, "pineapple")
# print(fruits)
# # fruits.append("kiwi")
# # print(fruits)
