// callback functions
// Higher Order Functions
// recursion
// Promises
// async await
//DOM 



//callback functions

function greet(name){
    console.log(`Hello I am ${name}`)
}


function greet2(name){
    greet(name)
}

greet2("batman")

function hello(){
    (()=>{
        console.log("Hello")
    })()
    
}

// hello()

//iffie function
(()=>{
    console.log("This is an iffie function")
})()


let stf = setTimeout(()=>{
    console.log("This is set timeout function")
},5000)

stf
setInterval(()=>{
    let date = new Date()
    const options = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    console.log(date.toLocaleTimeString('en-US',options))
},1000)