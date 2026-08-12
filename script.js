//let,const,var

// var a = 10 //var add this variable inside the window scope which is a bad thing to do
// console.log(a);

let a = 20 //declaration and initialtize
a = 21
// var c = 10
// if we make a variable named id and we use it in a function then by var we can redeclare the id later which will ultimately effect the function using the initial id value 
// var c = 13
const b = 11
// let a = 11   error
// const b = 12  error
a = 11
console.log(a,"\t",b)

let name = "Jiya"
console.log(name)

//types of variable
//number , string, boolean(true,false), null, undefined, NaN, infinite, symbol
let aa; //declaration
aa = Symbol() //initialization
console.log(aa);

console.log(typeof(aa))

