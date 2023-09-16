const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isspeaking = true;
const texttospeech = ()=>{
  const synth = window.speechSynthesis; // api for text to speech
  const text = textarea.value;
  if(!synth.speaking && text){
    const utternce =new  SpeechSynthesisUtterance(text); // converting text to speech
    synth.speak(utternce);
  }
  if(text.length>50){
    if(synth.speaking && isspeaking){
      button.innerText = "Pause";
      synth.resume();
      isspeaking = false;
    }
    else{
      button.innerText = "Resume";
      synth.pause();
      isspeaking = true;
    }
  }
  else{ // if the length is less than 50 words
    isspeaking = false;
    button.innerText = "Speaking";
  }

  setInterval(()=>{ // after completing the speech changing again to convert to text
    if(!synth.speaking && !isspeaking){
      isspeaking = true;
      button.innerText  = "Convert to speech";
    }
  });
}

button.addEventListener("click",texttospeech);