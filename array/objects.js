//singletonmade through constructer

// object literals
const mysum =Symbol("key1")

const jsUsre ={
    name : "aditya",
    [mysum] : "mykey",//way of writing symbol in object
    age : 20,
    location : "delhi",
    email : "adityarai@gmail.com",
    isLodggedIn : false,
    lastLoginDays : ["monday","sunday"]
}
console.log( jsUsre.age)//object ko print kerane ka method hai
console.log(jsUsre["age"]);//object ko print kerane ka method hai
console.log(jsUsre[mysum]);

// jsUsre.age = 21
// Object.freeze(jsUsre)// this is use freeze or fixed the value to avoid futher changes
// jsUsre.name="aditya rai"
// jsUsre.age = 22
// console.log(jsUsre);


// ******function*******
jsUsre.greeting =function(){
    console.log("hello Js user");
}
jsUsre.greetingTwo = function(){
    console.log(`MY name is = ${this.name}`);

}
 console.log(jsUsre.greeting());
 console.log(jsUsre.greetingTwo());


 