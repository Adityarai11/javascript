const Dates = document.getElementById('Dates');
const clock = document.getElementById('clock');


setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleDateString());
    Dates.innerHTML = date.toLocaleDateString()
    clock.innerHTML = date.toLocaleTimeString();

},1000)