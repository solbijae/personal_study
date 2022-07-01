const API_KEY = 'a759ec9733f17a5ebdcac3a5d82f7614'

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log("You live in", url);
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:last-child");
        const weather = document.querySelector("#weather span:first-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("Can't identify your current location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);