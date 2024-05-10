// function name() {//created function
//     console.log("a");
//     console.log("d");
//     console.log("i");
//     console.log("t");
//     console.log("y");
//     console.log("a");
// }
// name()//function referencce


function addtwoNo(number1,number2) {
    console.log(number1 + number2)
    let result =number1+number2;
    return result;
    
}
const result = addtwoNo(3,2);
console.log("result :", result);
function loginUserMessage (username){
    if (username === undefined){// or if (!username) same
        console.log("Please enter user naame");
        return 
    }
    return `${username} just logged in`

}
console.log(loginUserMessage("aditya"));
console.log(loginUserMessage());


function calculateCartPrice (...num1){//spread operator use to print every number 
    return num1
}
console.log(calculateCartPrice(200,300,400,411))

function calculateCart (val1,val2,...num2){//spread operator use to print every number 
    return num2
}
console.log(calculateCart(200,300,400,411)) 
//**********************way of passing object in function************************
const user ={
    username: "aditya",
    price : 200
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price id ${anyobject.price}`);
    
}
handleObject(user)
handleObject({//another way of passing object in function
    username:"adi",
    price : 399
})
// *********************************way of passing array in funnction****************************************
const newArray = [2,3,4,5,6]
function returnSecondarray(getarray) {
    return getarray[1]    
}

console.log(returnSecondarray(newArray));
console.log(returnSecondarray([200,300,400,500]));
