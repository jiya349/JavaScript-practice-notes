let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

obj.lastname = "Doe"

console.log(obj)

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

let {name, age, city} = obj  //deconstructuring of an object
console.log(name)


let arr = [2,5,7,3,2,5]
let arr2 = [...arr] //spread operator to copy an array
console.log(arr2)

let str = "Hello World"
// let str2 = [...str]  //spread operator to copy a string
console.log([...str])  //deconstructuring of a string