const istatus = document.querySelector("h5")
const btn = document.querySelector("#addfre")
let check = 0;

btn.addEventListener("click",function(){
    if (check == 0 ) {
    istatus.innerHTML= "Friends";
    istatus.style.color = "green";
    btn.innerHTML="Remove friend"
    check = 1;
    }else{
        istatus.innerHTML= "Stranger";
        istatus.style.color = "red";
        btn.innerHTML="Add friend"
        check = 0;
    }


})
// const remove = document.querySelector("#remove")

// remove.addEventListener("click",function(){
//     istatus.innerHTML= "Stranger";
//     istatus.style.color = "red";


// })
