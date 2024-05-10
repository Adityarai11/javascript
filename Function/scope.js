let a =300;
if (true) {//block scope
    let a =10;
const b = 20;
console.log("Inner" ,a);
}
console.log(a);