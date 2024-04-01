const name = "aditya rai"
const repoCount = 40

console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

const gameName  =new String('aditya');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));
console.log(gameName.substring(0,4));
console.log(gameName.slice(-4,4));
console.log(gameName.trim());//trim()is used for removing space(    aditya     )


const url = "https://aditya.com/aditya%20rai"

console.log(url.replace('%20','-'));
console.log(url.includes('play'));
console.log(name.split(' '));// split( ) is used for spliting turn it into array
