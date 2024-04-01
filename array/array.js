// // array
// const myArr =[0,1,6,3,4,5]
// const myArr2 =new Array(0,1,6,3,4,5)
// const myHero =["ironman","spiderman","caption america"]


// console.log(myArr[2]);
// console.log(myArr2[2]);

// //Array method

// myArr.push(6)//add value to array
// console.log(myArr);
// myArr.pop()//remove  last  value from array
// console.log(myArr);
 
// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));
// console.log(myArr.lastIndexOf(6));

// const newArr = myArr.join()//conver array into string
// console.log(myArr);
// console.log(newArr)
// console.log(typeof newArr); 


// //***************** slice , splice************
  
// console.log("A" , myArr);

// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B" ,myArr);

// const myn2 = myArr.splice(1,3)

// console.log(myn2);
// console.log("c" , myArr);
 
// ********** combing array********


const marvalHero =["ironman","spiderman","caption america"];
const dcHero =["superman","flash","batman"];
marvalHero.push(dcHero);
console.log(marvalHero);
marvalHero.pop();


const allHero = marvalHero.concat(dcHero);
console.log(allHero);



const all_new_hero =[...marvalHero,...dcHero];
console.log(all_new_hero);

const another_array = [1,2,3,4,[5,6,7],8,[9,1,3]]
const realaontherAraay = another_array.flat()
console.log(realaontherAraay);

console.log(Array.isArray("aditya"));
console.log(Array.isArray([1,2,3,4,5]));
console.log(Array.from("aditya"));
console.log(Array.from({name :"aditya"}));
 let score1 = 100
 let score2 = 200
 let score3 = 300
console.log(Array.of(score1,score2,score3));