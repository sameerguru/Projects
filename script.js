const wrapper = document.querySelector(".wrapper");
toast = wrapper.querySelector(".toast");
title = toast.querySelector("span");
subtitle = toast.querySelector("p");
wifiIcon = toast.querySelector(".icon");
closeIcon = toast.querySelector(".close-icon");


window.onload = ()=>{
            function ajax(){
                let xhr = new XMLHttpRequest();
                xhr.open("GET", "https://jsonplaceholder.typicode.com/posts",true);
                xhr.onload = ()=>{
                    if(xhr.status ==200 && xhr.status <300 ){
                        toast.classList.remove("offline");
                        title.innerHTML = "You'r Online now";
                        subtitle.innerHTML = "Hurray! Internet is connected";
                        wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';
                        closeIcon.onclick = ()=>{
                            wrapper.classList.add("hide");
                        }
                        setTimeout(() => {
                            wrapper.classList.add("hide");
                        },5000);
                    }else{
                        offline();
                    }
                }
                xhr.onerror  = ()=>{
                    offline();
                }
                xhr.send();
            }

            function offline(){
                wrapper.classList.remove("hide");
                toast.classList.add("offline");
                title.innerHTML = "You are offline";
                subtitle.innerHTML = "Oops you are not connected";
                wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
            }
            setInterval(()=>{
                ajax();
            },100)

}
