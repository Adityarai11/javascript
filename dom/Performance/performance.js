// performance.now();
// reflow is the calculation postion and dimension page element  
//adding 100 para
const t1 = performance.now();
for (let i =1; i<=100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'this  is para ' + i;

    document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("this took " + (t2-t1) +" ms ")

// optimizing a bit 
const t3 = performance.now();
let newDiv = document.createElement('div');

for (let i =1; i<=100; i++) {
    let element = document.createElement('p');
    element.textContent = 'this  is para ' + i;

    newDiv.appendChild(element);
}

document.body.appendChild(newDiv);
const t4 = performance.now();
console.log("this took " + (t4-t3) +" ms ")


//Document fragment used when there is mulitiple time dom is update  

let fragment = document.createDocumentFragment();

for (let i =1; i<=100; i++) {
    let element = document.createElement('p');
    element.textContent = 'this  is para ' + i;

    fragment.appendChild(element);
}

document.body.appendChild(fragment); // 1 Reflow,1 Repaint
 
// setTimeOut

setTimeout(() => {
    console.log('hello everyone');
    
}, 2000);