const text = document.querySelector(".input-area input");
const chkbutton = document.querySelector(".input-area button");
const infotxt = document.querySelector(".info");
let originaltext;

text.addEventListener("keyup",()=>{
  originaltext = text.value.toLowerCase().replace(/^A-Z0-9/ig, "");
  if(originaltext){
   return chkbutton.classList.add("active");
  }
  infotxt.style.display = "none";
  chkbutton.classList.remove("active");
});

chkbutton.addEventListener("click",()=>{
  let reverse = originaltext.split("").reverse().join("");
  infotxt.style.display = "block";
  if(reverse != originaltext){
    infotxt.innerHTML = `No, <span>'${text.value}'</span> is not a palindrome!`;
  }
  else{
    infotxt.innerHTML = `Yes, <span>'${text.value}'</span> is a palindrome!`;
    
  }
});

