const clock =document.querySelector("#clock");

function getClock(){
    const date  = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}`;
 }

getClock(); // 브라우저 살행되자마자 시간이 나오도록 함수 호출함
setInterval(getClock, 1000);

const savedUsername2 = localStorage.getItem("username");

if(savedUsername2 != null){
    clock.classList.remove("hidden");
 }