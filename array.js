let arr = [2,5,7,3,2,5]


arr.forEach((el)=>{
    console.log(el*2)
    // return el;
})

// console.log(newarr)

let newarr = arr.map((el)=>{
    console.log(el*3)
    return el*2
})

console.log(newarr)

let arr2 = arr.filter((el)=>{
    return el>5
})

console.log(arr2)

console.log(arr.every((el)=>{
    return el>1
}))

console.log(arr.some((el)=>{
    return el>5
}))


console.log(arr.reduce((el,acc=1)=>{
    return acc*=el
}))

console.log(arr.includes(5))
console.log(arr.indexOf(5))
console.log(arr.length)