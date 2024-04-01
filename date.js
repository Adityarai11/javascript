// DATE

let mydate =new Date();
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)

let myCreatedDate = new Date(2024,2,11)
let myCreateddate = new Date(2024,3,1,4,3)
console.log(myCreateddate.toLocaleDateString());
console.log(myCreateddate.toLocaleString());
console.log(myCreatedDate.toDateString());
console.log(mydate.getDate())
console.log(mydate.getMonth())
console.log(mydate.getTime())
console.log(mydate.toLocaleString('default',{
    weekday:"short"
}))


