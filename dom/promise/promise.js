// let myPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('i am inside promise');   
//     },5000)
//     resolve(2235);
//     //reject(new error);
// })

// console.log('phela');

// // promise ---> "then" work onn value 
// // promise ---> "catch" work on error 

// myPromise.then((value) => {console.log(value)},myPromise.catch((error) => {console.log("Recieved an error")}));



// let myPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('i am inside promise2');   
//     },5000)
//     //resolve(2235);
//     //reject(new error);
// })
// myPromise2 .catch((error) => {console.log("recived an error")});



let waada1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('settimeout1 started');
        
    },2000);
    resolve(true);
})
waada1.then(()=>{
    let waada2 = new Promise(function(resolve,reject){
        resolve("waada 2 resolve");
    })
    return waada2;
}).then((value) =>{console.log(value)});