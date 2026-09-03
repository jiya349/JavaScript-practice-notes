let day = "Monday"
let time = "Afternoon"
// if(day == "Monday"){
//     console.log("Today is monday, eat cakes");
// }else if(day == "Tuesday")

//switch - conditional statement like if else

switch(day){
    case "Monday":
        if(time == "Morning"){
            console.log("Eat bread and butter");
        }else if(time == "Afternoon"){
            console.log("Eat lunch")
        }else{
            console.log("Eat dinner")
        }
        break;
    case "Tuesday":
        console.log("Today is tuesday");
        break;
    default:
        console.log("Enter a valid day");

}

//truthy and falsy values

//falsy values = 0, NaN, null, undefined, 0/0
//Every other number or string is truthy value
if(1){
    console.log("Truthy value");
}
if(0){
    console.log("Truthy value");
}else{
    console.log("Falsy Value");
}
if(-1){
    console.log("Truthy value");
}