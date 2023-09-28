const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

for(let s = 0;s<60;s++){
  let mspike = document.createElement('i');
  let sspike = document.createElement('i');
  mspike.className  = 'spike';
  sspike.className = 'spike';
  mspike.style = `--rotate: ${6*s}deg`;
  sspike.style = `--rotate: ${6*s}deg`;
  mspike.setAttribute('data-i',s);
  sspike.setAttribute('data-i',s);
  seconds.append(sspike);
  minutes.append(mspike);
}

function getTime(){
  let date = new Date();
   m = date.getMinutes();
   s = date.getSeconds();
  hour.textContent = date.getHours();
  minute.textContent = m;

  minutes.style = `--drotate:${6 * m}deg`;

    if(s == 0){
			seconds.classList.add('stop-anim')
    } else{
      seconds.classList.remove('stop-anim')
    }
    if(m == 0){
			minutes.classList.add('stop-anim')
    } else{
      minutes.classList.remove('stop-anim')
    }
  	
  		seconds.style = `--drotate:${6 * s}deg`;
  
}

setInterval(getTime,1000);
getTime();