function updateClock(){

let now=new Date();

document.getElementById("clock").innerHTML=
now.toLocaleTimeString();

}

updateClock();

setInterval(updateClock,1000);
