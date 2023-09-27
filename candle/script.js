const thread = document.querySelector(".thread");
const flames = document.querySelector(".flames");
const glow  =document.querySelector(".glow");

thread.addEventListener("click",()=>{
  flames.classList.toggle("active");
  glow.classList.toggle("active");
  thread.classList.toggle("change");
})