// loops
// let i = 10;
// while(true){
//     console.log(i)
//     i+=10;
//     if(i==100){
//         break;
//     }
// }

// let i = 19;
// while(i<=190){
//     console.log(i);
//     i+=19;
// }

// let str = "Kanwarpal Singh(lassi nhi lata) and Jiya Narang(Rang nhi hai jiwan me) and Krishna(jisme bhagwan wale koi gun nhi hai)"
// let i = 110;
// while(i<str.length){
//     console.log(str[i]);
//     i++;
// }

// let a = 10;
// let b = ++a;
// console.log(a)
// console.log(b)

// let target = "Jiya";
// let arr = str.split(" ")
// console.log(arr)
// while(i<arr.length){
//     if(arr[i]==target){
//         console.log("target found",i,arr[i])
//     }
//     i++;
// }
// console.log(str.length)

// do{
//     console.log("Traversing the string...");
//     console.log(str[i])
//     i++;
// }while(i<str.length)


// for loop
// initialization
// let v = 10

// for(let i=10;i>0 ;i--){
//     console.log(i)
// }

// let arr = [1,2,3,4,5,6,7]
// for(let i=0;i<=arr.length;i++){
//     console.log(arr[i])
// }
// let str = "Hello how are you?"
// for(let i = 0;i<str.length;i++){
//     console.log(str[i])
// }


// let target = 6
// for(let i=0; i<arr.length;i++){
//     if(arr[i]==target){
//         console.log("target found at index ",i)
//     }
// }


// arrays
// let str1 = "abcd"
// let str2 = "abcd"

// let num = 2
// let str3 = "2"
// const arr = [1,2,3,4]
// let arr2 = [1,2,3,4]
// arr[1] = 2
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i])
// }
// // console.log(num===str3)
// // console.log(str1==str2)
// // console.log(arr==arr2)

// // let arr3 = arr;

// // console.log(arr === arr3)

// arr.shift() 
// // arr.push(6)
// arr.pop()
// console.log(arr)
// let array = [2,3,54,6,10,11,534]
// let target = 10

// for(let i = 0; i<array.length; i++){
//     if(array[i]==target){
//         console.log("target found at index",i)
//         break
//     }
// }


// let arr = [1,2,4,[2,4,6,7],[8,3,5,7]]

// console.log(arr[2][2])

// objects

// key:value
// let obj = {
//     name:"Batman",
//     age:23,
//     address:{
//         state:"haryana",
//         city:"Kaithal",
//         street_add:"pata nhi",
//         pincode:136027
//     }
// }
// // console.log(obj.address.city)

// let data = [{
//     name:"Batman",
//     age:23,
//     address:{
//         state:"haryana",
//         city:"Kaithal",
//         street_add:"pata nhi",
//         pincode:136027
//     }
// },{
//     name:"Superman",
//     age:22,
//     address:{
//         state:"haryana",
//         city:"Kaithal",
//         street_add:"pata nhi",
//         pincode:136027
//     }
// }]

// console.log(data[1].address.pincode)



// let arr = [9,5,8,3,78,2,75]

// let max = arr[0]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max)

// let min = arr[0]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min = arr[i]
//     }
// }
// console.log(min)


// function declaration
// function sum(a,b){
   
//     return `Sum of two numbers are ${a+b}`;
// }

// //function expression
// let result = sum(21,23)
// console.log(result)

// var twoSum = function(nums, target) {
//     let n = nums.length;
//     for(let i=0; i<n; i++){
//         for(let j=i+1; j<n; j++){
//             if(nums[i]+nums[j]==target){
//                 console.log([i,j])
//             }
//         }
//     }
// };

// twoSum([2,3,54,6,7,2],9)

// let i = 202
// console.log(i[0])


//Prime number

let num = 7
function isPrime(num){
    for(let i = 2; i<Math.sqrt(num); i++){
        if(num%i==0){
          console.log("Not a prime number..")
          return;
        }
    }
    console.log("Number is prime")
}
isPrime(num)