
// // Math in js

// console.log(Math.PI);
// Math.PI = 3.14
// console.log(Math.PI);

// console.log(Math.pow(16,16))
// console.log(Math.sqrt(164))
// let num = 12.5
// let num2 = -12.1
// console.log(Math.ceil(num2))
// console.log(Math.floor(num2))
// console.log(Math.round(num2))


// // console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));
// console.log(Math.ceil(Math.random()*10));
// console.log(Math.round(Math.random()*10));
// console.log(Math.floor(Math.random()*10)+10);
// console.log(Math.ceil(Math.random()*10)+10);
// console.log(Math.round(Math.random()*10)+10);


// //if else
// let age = parseInt(prompt("Enter your age"))
// //18>18
// if(age>18){
//     console.log("You are eligible to vote");
// }else{
//     console.log("You are not eligible to vote");
// }
// console.log("Hello Munish");

// // practice
// console.log(Math.PI);
// Math.PI=3.14
// console.log(Math.PI);
// console.log(Math.pow(4,2));
// console.log(Math.sqrt(225));
// let num3 = 8.8
// console.log(Math.ceil(num3));
// console.log(Math.floor(num3));
// console.log(Math.round(num3));
// let grade = parseInt(prompt("Enter your grade: "));

// if(grade >= 90){
//     console.log("A+, you topped the class");
// }else if(grade >= 80){
//     console.log("A, you did well");
// }else if(grade >= 70){
//     console.log("B, you can do better");
// }else if(grade >= 60){
//     console.log("C, you need to work harder");
// }else{
//     console.log("F, you failed the class");
// }

// if(10 == '10'){
//     console.log("true ==");
// }

// if(10 === '10'){
//     console.log("true ===");
// }else{
//     console.log("false ===");
// }
// console.log("Hello");


// let num = parseInt(prompt("Enter a number: "));

// //even or odd 
// if(num%2 == 0){
//     console.log("Even number");
// }else{
//     console.log("odd Number");
// }


//nested if

// let player1 = "Scissors"
// let player2 = prompt("Enter Rock , paper or scissors")

// if(player1 == "Rock"){
//     if(player2=="Rock"){
//         console.log("Draw");
//     }else if(player2 == "Paper"){
//         console.log("Player 2 won");
//     }else{
//         console.log("Player 2 loose");
//     }
// }else if(player1 == "Paper"){
//      if(player2=="Rock"){
//         console.log("Player 2 loose");
//     }else if(player2 == "Paper"){
//         console.log("Draw");
//     }else{
//         console.log("Player 2 won");
//     }
// }else{
//     if(player2=="Rock"){
//         console.log("Player 2 Win");
//     }else if(player2 == "Paper"){
//         console.log("Player 2 loose");
//     }else{
//         console.log("Draw");
//     }
// }

// let computer = ""
// let num = Math.floor(Math.random()*3);
// // console.log(num);
// if(num == 0){
//     computer = "rock"
// }else if(num == 1){
//     computer = "paper"
// }else{
//     computer = "scissors"
// }
// // console.log(computer);
// let user = prompt("Enter your choice from rock paper or scissors")

// if(user == "rock"){
//     if(computer == "rock"){
//         console.log("Match draw");
//     }else if(computer == "paper"){
//         console.log("Computer Wins..")
//     }else{
//         console.log("You win...")
//     }
// }else if(user == "paper"){
//     if(computer == "rock"){
//         console.log("You win");
//     }else if(computer == "paper"){
//         console.log("Match draw.....")
//     }else{
//         console.log("You loose....")
//     }
// }else if(user == "scissors"){
//     if(computer == "rock"){
//         console.log("You loose...");
//     }else if(computer == "paper"){
//         console.log("You win.....")
//     }else{
//         console.log("Match draw....")
//     }
// }else{
//     console.log("Enter a valid choice...")
// }

// console.log("Computer choice was",computer)


//leap year

//4000 or 4 se divide ho and 1000 se na ho
let year = 2025
if(year%4000==0){
    console.log("Leap year")
}else if(year%4==0 && year%1000!=0){
    console.log("Leap year")
}else{
    console.log("Not a leap year")
}
