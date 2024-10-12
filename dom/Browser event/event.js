// // monitorevent();// let as see what event are happaning on the browser "turn on event "
// // unmonitorevent();// stop showing what event are happaning on the browser "turn off event "


// //****************************Event target*********************************// inteface implemented by object that can recive Events & may have listener forn them
// //addEventListener()
// //removeEventListener()
// //.dispatchEvent()
// function eventlistener(){
//     content.innerHTML = 'learning addEventListener'
// }

// const content = document.querySelector('h1')
// content.addEventListener('click', eventlistener)
// content.removeEventListener('click', eventlistener)

// //******************************target event capturephase***********************
// //content.addEventListener(type->click,scroll ,listener-> funcion(),usecapture->true)

// //

// const Content2 = document.querySelector('#wapper') ;
// Content2.addEventListener('click', function (event) {
//     console.log(event);
    
// })


// // ****************** Prevent defult action ******************* 

// const link = document.querySelectorAll('a');
// const targetLink = link[1];
// targetLink.addEventListener('click',function (action) {
//     action.preventDefault();
//     console.log("lol");
// })

//

let myDiv = document.createElement('div');
function paraStatus(event) {
    console.log('Para'+ event.target.textContent);
}
myDiv.addEventListener('click',paraStatus )
for (let i = 1; i <=10; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para' + i ;
    newElement.addEventListener('click',paraStatus )
    myDiv.appendChild(newElement);  
}
document.body.appendChild(myDiv)