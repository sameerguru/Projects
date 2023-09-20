const container = document.querySelector(".container");
const qrinput = document.querySelector(".whole input");
const genebtn = document.querySelector(".whole button");
const qrimg = document.querySelector(".qrimg img");
let preval;

genebtn.addEventListener("click",()=>{
  let qrval = qrinput.value.trim();
  if(!qrval || preval === qrval) return;
  preval = qrval;
  genebtn.innerText = "Generating QR Code...";
  qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=$ {qrval}`;
  qrimg.addEventListener("load",()=>{
    container.classList.add("active");
    genebtn.innerText = "Generate QR Code";
  });
});

qrinput.addEventListener("keyup",()=>{
  if(!qrinput.value.trim()){
    container.classList.remove("active");
    preval = "";
  }
});

