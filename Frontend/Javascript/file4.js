// try {
//     console.log(c+d)
// } 
// catch (error) {
//     console.log("There is an error")
// }
// console.log("This is next line ")

// //template literals
// console.log(`${2+3} ${"Hello"}`)

// // Spread Operator "..."
// const arr1 = ['a', 'b', 'c']
// const arr2 = [arr1, 'd', 'e', 'f']
// const arr3 = [...arr1, 'd', 'e', 'f']
// console.log(arr2)
// console.log(arr3)

//Rest operator 
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr5 = [1, 2, 3, ...arr4]
console.log(arr5)