const time  = document.getElementById('time');
const timeformat  = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded',()=>{//DOM after html and css are loaded javascript
    setInterval(showTime,1000); //set interval has two properties one is function,after how much time
}); //1000MS  = 1S

const showTime = () =>{
    let date  = new Date();//inbuilt date function
    let hr  = date.getHours();
    let min = date.getMinutes();
    let secs = date.getSeconds();


    //console.log("hours "+ hr +"mins "+ min+ "secs"+secs );
    hr = hr<10 ? `0${hr}`:hr;
    min = min<10 ? `0${min}`:min;
    secs = secs<10 ? `0${secs}`:secs;

    time.innerHTML = `${hr} : ${min} : ${secs}`;//place holders

    timeformat.innerHTML =  hr>12 ? "PM" : "AM";
}