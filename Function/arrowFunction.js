//******* {this} function**********
const user ={
    username : "adi",
    price : 999,
    welcomeMessage : function () {

        console.log(`${this.username},welcome to website`);//(this)current context ko refer ker ta hai
        console.log(this)//understand current context 
    
    }
}

user.welcomeMessage()
user.username = "rai"
user.welcomeMessage()

console.log(this);//it refer to empty enviorment

function chai() {
    let username ="aditya"
    console.log(this.username);
}
chai()

const Chai = function () {
    let username = "aditya rai"
    console.log(this.username);    
}
Chai()
//*************************** Arrow function**********************
const coffe = () =>{
    let username = "aditya rai"
    console.log(this.username);    
}
coffe()
//*************************** Arrow function**********************
const addtwo = (num1,num2) =>{//{}use hua to return likh na padega
    return num1 + num2;
}
console.log(addtwo(3,1));

// implicit return (another way to use Arrow function ) 

const addtwono = (num1,num2) => (num1 + num2);//() use kiya to return nhi likh na hai  
console.log(addtwo(3,1));