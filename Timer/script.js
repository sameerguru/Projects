let d = document.querySelector("#days");
let h = document.querySelector("#hrs");
let m = document.querySelector("#min");
let s = document.querySelector("#secs");


let countdown  = ()=>{

  let futureDate = new Date("1 Jan 2024");
  let currentDate = new Date();
  let myDate = futureDate-currentDate;

  let days = Math.floor(myDate/1000/60/60/24);
  let hrs = Math.floor(myDate/1000/60/60) % 24;
  let min = Math.floor(myDate/1000/60) % 60;
  let secs = Math.floor(myDate/1000) % 60;

  d.innerHTML = days;
  h.innerHTML = hrs;
  m.innerHTML = min;
  s.innerHTML = secs;
}
countdown();
setInterval(countdown,1000);