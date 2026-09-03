// Task 1
let day = "Thursday"
switch (day) {
    case "Monday":
        console.log("Work Day");
        break;
    case "Tuesday":
        console.log("Work Day");
        break;
    case "Wednesday":
        console.log("Work Day");
        break;
    case "Thursday":
        console.log("Work Day");
        break;
    case "Friday":
        console.log("Work Day");
        break;
    case "Saturday":
        console.log("Weekend");
        break;
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Enter a valid day");
}

// Task 2
// let month = prompt("Enter the month...")
// switch (month) {
//     case "January":
//         console.log("Winter❄️");
//         break;
//     case "February":
//         console.log("Spring🌸");
//         break;
//     case "March":
//         console.log("Spring🌸");
//         break;
//     case "April":
//         console.log("Summer☀️");
//         break;
//     case "May":
//         console.log("Summer☀️");
//         break;
//     case "June":
//         console.log("Summer☀️");
//         break;
//     case "July":
//         console.log("Monsoon🌧️");
//         break;
//     case "August":
//         console.log("Monsoon🌧️");
//         break;
//     case "September":
//         console.log("Autumn🍂");
//         break;
//     case "October":
//         console.log("Autumn🍂");
//         break;
//     case "November":
//         console.log("Winter❄️");
//         break;
//     case "December":
//         console.log("Winter❄️");
//         break;
//     default:
//         console.log("Enter a valid month");
// }

// Task 3
let num1 = parseInt(prompt("Enter number 1..."));
let num2 = parseInt(prompt("Enter number 2..."));
let symbol =prompt("Enter symbols...");
switch (symbol) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "%":
        console.log(num1 % num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "**":
        console.log(Math.pow(num1,num2));
        break;
    default:
        console.log("Enter a valid symbol");
}