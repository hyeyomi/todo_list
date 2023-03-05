const API_KEY = "b6a13fedb553fba629313191fb403b0e";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response)=>response.json()).then((data)=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}℃ `;
    });
}

function onGeoError(){
    alert("Can't find position");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); // 성공시에 실행될 함수, 오류 함수
