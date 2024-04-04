// Singleton object

// const tinderUser =  new Object()// Singleton object
const tinderUser ={}// non-Singleton object
tinderUser.ID = 1234
tinderUser.name = "aditya "
tinderUser.isLoggedIn = false

console.log(tinderUser)

console.log(Object.keys(tinderUser));//way of finding key
console.log(Object.values(tinderUser));//way of finding values
console.log(Object.entries(tinderUser));//convert obecjt into array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// check wether it has this property 

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c", 4:"d"}
const obj3 = Object.assign(obj1,obj2)// Object.assign use for combining two or more object 
const obj4 = Object.assign({},obj1,obj2)// Object.assign use for combining two or more object 
console.log(obj3);
console.log(obj4);

const obj5 = {...obj1,...obj2}// spread opreater iss used to combine
console.log(obj5);

const users = [// array ke under object 
    
    {   Id : 1234,name : "Aditya",  email : "adi@gmail.com"}, 
    {   Id : 1235,name : "rishabh",email : "rishabh@gmail.com" },   
    {   Id : 1236,name : "Raghvender",email : "Raghu@gmail.com"}
]
console.log(users[1].name);//use print array obje ct
   
// ********way of destructer object *******
const course ={
    counrseName : "js",
    price :"999",
    courseInstructer : "hitesh"
}
console.log(course.courseInstructer)

const {counrseName} = course
const {counrseName: name} = course// use this syntax we can change the name of data or key

console.log(name);